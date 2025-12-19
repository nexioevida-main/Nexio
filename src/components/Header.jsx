const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-500">Nexio</div>

          <nav className="hidden md:block">
            <ul className="flex gap-5">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#opportunities"
                  className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
                >
                  opportunities
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-3">
            <a
              href="#login"
              className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="#signup"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
