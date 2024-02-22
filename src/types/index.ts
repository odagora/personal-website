/* eslint-disable @typescript-eslint/consistent-type-imports */
export type Page<T> = import('astro').Page<T>;
export type MarkdownInstance<T extends Record<string, any>> =
  import('astro').MarkdownInstance<T>;
