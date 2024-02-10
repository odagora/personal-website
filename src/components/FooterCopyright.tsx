type FooterCopyrightProps = {
  author: string;
};

export const FooterCopyright = (props: FooterCopyrightProps) => {
  return (
    <div className="border-t border-gray-600 pt-5 text-center">
      <p className="text-sm text-gray-200">Built with ♥ by {props.author}.</p>
      <p className="text-sm text-gray-200">
        © Copyright {new Date().getFullYear()} - All rights reserved.
      </p>
    </div>
  );
};
