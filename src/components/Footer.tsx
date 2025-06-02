const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-4 mt-auto md:py-4">
      <div className="max-w-4xl mx-auto px-4 text-center font-inter text-md xl:text-lg">
        © {new Date().getFullYear()} Buon Appetito App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
