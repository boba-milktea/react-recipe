const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-4 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Buon Appetito App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
