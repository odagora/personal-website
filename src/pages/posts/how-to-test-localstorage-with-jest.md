---
layout: '@/templates/BasePost.astro'
title: How to test localStorage with Jest
description: Learn how to effectively test built-in browser features like localStorage with Jest. Read now!
pubDate: 2024-03-19T00:00:00Z
imgSrc: '/assets/images/big-data-center.jpg'
imgAlt: 'ecommerce image'
---

## Introduction
When testing features that interact with `localStorage`, you need to mock or spy on the behavior to isolate it. It's common practice to isolate Web APIs or third-party packages that don't need to be tested in a particular test suite.

The challenge with `localStorage` is that it can't be mocked or spied on as usual due to a recent change in the `jsdom` library.


## Implementation details
Consider the following `Cart` class that allows users to add products to the cart:
```js
export class Cart {
  // Constructor initializes properties for items, subTotal, tax, total, and totalElement
  constructor() {
    this.subTotal = 0;
    this.tax = 0;
    this.total = 0;
    this.items = this.setProducts(getItemFromLocalStorage('cartItems'));
    // Create an instance of CartTotals with initial values and assign it to totalElement
    this.totalElement = new CartTotals(this.subTotal, this.tax, this.total);
  }

  // Method to set the products in the cart
  setProducts(products) {
    // Check if products are not empty
    if (!products || products.length === 0) {
      return [];
    }

    return products.map(product => new CartItem({ ...product }));
  }

  // Method to add a product to the cart
  addProduct(productDetails) {
    // Create a new CartItem instance with the provided product details
    const cartItem = new CartItem(productDetails);
    // Add the new cart item to the items array
    this.items.push(cartItem);
    // Render the updated cart
    this.render();
    // Save updated items array to localStorage
    setItemToLocalStorage('cartItems', this.items);
  }

  // Method to remove a product from the cart
  removeProduct(productDetails) {
    // Filter out the item with the specified name from the items array
    const newItems = this.items.filter(item => item.name != productDetails.name);
    this.items = newItems;
    // Render the updated cart
    this.render();
    // Update items array in localStorage after removing item
    setItemToLocalStorage('cartItems', this.items);
  }
}
```
The test cases for asserting the correct behavior when adding or removing a product to the cart should be as follows:
```js
test('should add a product to the cart', () => {
  // Arrange & Act
  cart.addProduct(mockedMenuItems[0]);

  // Assert
  const cartItem = cart.items[0];
  expect(cartItem.name).toBe(mockedMenuItems[0].name);
  expect(cartItem.price).toBe(mockedMenuItems[0].price);
  expect(cartItem.quantity).toBe(mockedMenuItems[0].quantity);
  expect(cartItem.image).toBe(mockedMenuItems[0].image);
  expect(cartItem.alt).toBe(mockedMenuItems[0].alt);
  expect(cartItem.subTotal).toBe(mockedMenuItems[0].price);
  expect(cartItem.isRemoveCTAHidden).toBe(true);
  // Assert 'localStorage' 'setItem' call with args
  expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(cart.items));
})

test('should remove a product from the cart and leave it empty', () => {
  // Arrange & Act
  cart.addProduct(mockedMenuItems[0]);
  cart.removeProduct(mockedMenuItems[0]);

  // Assert
  expect(cart.items).toEqual([]);
  expect(cart.isEmpty()).toBe(true);
  // Assert 'localStorage' 'setItem' call with args
  expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(cart.items));
})
```
In the last line of each test, we are asserting the `setItem` `localStorage` correct call with the `cart.items` as argument. If we run the test, we should expect it to pass given that Jest mocks the `localStorage` behavior automatically. However, we get the following errors:
![Unit testing results failing](/assets/images/image-post4-unit-testing-results.jpg)

The issue is that currently `localStorage` cannot be mocked or spied on by Jest as usual due to changes in the `jsdom` library, which runs underneath Jest to simulate the DOM browser behavior. We need to find a way to mock it effectively.

## Testing `localStorage` feature with Jest
Let's examine the following two workarounds to manage this problem when performing unit testing with Jest and analyze their drawbacks.

### First approach - spy on the prototype
At first glance, this seems like the way to go for mocking the `localStorage` property. Inside our test suite, we can add the following lines of code:
```js
// Spy on the 'localStorage' prototype
jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem')

// Mock the 'setItem' method of the 'localStorage' property
Object.setPrototypeOf(window.localStorage.setItem, jest.fn())
```
Here we are spying on the prototype of the `Storage` interface belonging to the Web Storage API. This approach has a drawback as the spy can now observe and manipulate **every instance of the class all at once**. This means that we won't be able to differentiate between `localStorage` and `sessionStorage`as both are instances of `Storage` and inherit from the `Storage` prototype.

This leads us to think about a more convenient way to mock the `localStorage` specifically.

### Second approach - mock the `window` `localStorage` property
In this approach, we are mocking the `localStorage` property of the `window` global object using the following helper function:
```js
/**
 * Function that mocks a property on the 'window' object with a specified value.
 * Sets up the mock before each test suite and restores
 * the original property after each test suite.
 * @example
 * mockWindowProperty('innerWidth', 500);
 * @param {string} property The name of the property to mock on 'window' object.
 * @param {*} value The value to set on mocked property.
 */
export const mockWindowProperty = (property, value) => {
  const originalProperty = window[property];
  delete window[property];
  beforeAll(() => {
    if (originalProperty !== undefined) {
      Object.defineProperty(window, property, {
        configurable: true,
        writable: true,
        value,
      });
    } else {
      window[property] = value;
    }
  });
  afterAll(() => {
    if (originalProperty !== undefined) {
      window[property] = originalProperty;
    } else {
      delete window[property];
    }
  });
};
```
We can then import the helper function in our testing file and pass the `localStorage` property into it:
```js
import { mockWindowProperty } from "../__mocks__/mockWindowProperty";
```
```js
describe('Cart', () => {
  mockWindowProperty('localStorage', {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn()
  });
})
```
Here we are assigning each `localStorage` method to a mock Jest function to have control over the Web Storage API in our testing environment.


If we now run the test suite again , we can confirm that all tests are passing:
![Unit testing results passing](/assets/images/image-post4-unit-testing-results2.jpg)

You can click on the collapsible section to see the detail of the final test suite for our `Cart` component:
<details>
  <summary><span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">cart.test.js</span></summary>

  ```js
  import { Cart } from "../js/components/cart";
  import { CartItem } from "../js/components/cartItem";
  import { mockedMenuItems } from "../__mocks__/menuData";
  import { CartTotals } from "../js/components/cartTotals";
  import { mockWindowProperty } from "../__mocks__/mockWindowProperty";

  describe('Cart', () => {
    let cart, cartContainer, totalsContainer, emptyMessage;
    mockWindowProperty('localStorage', {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn()
    });

    beforeEach(() => {
      cart = new Cart();
      cartContainer = document.createElement('ul');
      totalsContainer = document.createElement('div');
      emptyMessage = document.createElement('p');
      cartContainer.classList.add('cart-summary');
      totalsContainer.classList.add('totals');
      emptyMessage.classList.add('empty');
      jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
        if (selector === '.cart-summary') {
          return cartContainer;
        }
        if (selector === '.totals') {
          return totalsContainer;
        }
        if (selector === '.empty') {
          return emptyMessage;
        }
      });
    })

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should create a Cart instance with correct initial values', () => {
      // Assert
      expect(cart.items).toEqual([]);
      expect(cart.subTotal).toBe(0);
      expect(cart.tax).toBe(0);
      expect(cart.total).toBe(0);
      expect(cart.totalElement.subTotal).toBe(0);
      expect(cart.totalElement.tax).toBe(0);
      expect(cart.totalElement.total).toBe(0);
    })

    test('should render the entire cart, including items and totals', () => {
      // Arrange
      const cartItem = new CartItem(mockedMenuItems[0]);
      cart.items.push(cartItem);
      // Act
      cart.render();

      // Assert
      const cartItems = cartContainer.querySelectorAll('cart-item');
      const cartTotal = totalsContainer.querySelector('cart-totals');
      expect(cartItems.length).toBe(1);
      expect(cartTotal).not.toBeNull();
    })

    test('should add a product to the cart', () => {
      // Arrange & Act
      cart.addProduct(mockedMenuItems[0]);

      // Assert
      const cartItem = cart.items[0];
      expect(cartItem.name).toBe(mockedMenuItems[0].name);
      expect(cartItem.price).toBe(mockedMenuItems[0].price);
      expect(cartItem.quantity).toBe(mockedMenuItems[0].quantity);
      expect(cartItem.image).toBe(mockedMenuItems[0].image);
      expect(cartItem.alt).toBe(mockedMenuItems[0].alt);
      expect(cartItem.subTotal).toBe(mockedMenuItems[0].price);
      expect(cartItem.isRemoveCTAHidden).toBe(true);
      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(cart.items));
    })

    test('should remove a product from the cart and leave it empty', () => {
      // Arrange & Act
      cart.addProduct(mockedMenuItems[0]);
      cart.removeProduct(mockedMenuItems[0]);

      // Assert
      expect(cart.items).toEqual([]);
      expect(cart.isEmpty()).toBe(true);
      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(cart.items));
    })

    test('should update the totals section with correct values', () => {
      // Arrange
      const subTotal = 10;
      const tax = 1;
      const total = 11;
      const subTotalContainer = document.createElement('div');
      const taxContainer = document.createElement('div');
      const totalContainer = document.createElement('div');
      subTotalContainer.classList.add('subtotal');
      taxContainer.classList.add('tax');
      totalContainer.classList.add('total');
      jest.spyOn(CartTotals.prototype, 'querySelector').mockImplementation((selector) => {
        if (selector === '.subtotal') {
          return subTotalContainer;
        }
        if (selector === '.tax') {
          return taxContainer;
        }
        if (selector === '.total .price') {
          return totalContainer;
        }
      });

      // Act
      cart.updateTotals(subTotal, tax, total);

      // Assert
      expect(cart.totalElement.subTotal).toBe(subTotal);
      expect(cart.totalElement.tax).toBe(tax);
      expect(cart.totalElement.total).toBe(total);
    })
  })
  ```
</details>

## Conclusion
In this article, we learned how to effectively test built-in browser features like `localStorage` using Jest. By mocking the `localStorage` property of the `window` object, we were able to isolate the `localStorage` behavior and ensure our tests pass. This technique can be applied to other Web APIs that may cause issues during unit testing.