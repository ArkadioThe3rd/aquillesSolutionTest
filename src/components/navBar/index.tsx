const NavBar = () => (
  <div>
    <div className="w-full h-14 bg-blue-900">
      <div className="flex flex-row h-full text-white ml-16 text-xl">
        <div className="hover:bg-blue-600 flex h-full px-3 items-center">
          <a className="" href="/">
            Home
          </a>
        </div>
        <div className="hover:bg-blue-600 flex h-full px-3 items-center">
          <a className="" href="/configuracion">
            Configuration
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
