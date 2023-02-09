function Header() {
  return (
   <nav className="sticky z-50 shadow-xl w-full top-0 px-10 py-4 bg-white backdrop-filter backdrop-opacity-50 lg:px-40">
      <div className="flex items-center justify-between">
        <div>
          <a href="#">
            <img src="img/logo.svg" alt="logo" className="md:hover:scale-105"/>
          </a>
        </div>
        <div className="hidden text-primary space-x-6 md:flex">
          <a href="#about" className="hover:text-quinary">About</a>
          <a href="#skills" className="hover:text-quinary">Skills</a>
          <a href="#projects" className="hover:text-quinary">Projects</a>
        </div>
          <button onClick={} className="hidden shadow-lg p-3 px-6 pt-2 text-white bg-secondary rounded hover:bg-quinary md:block">Contact</button>
          <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
      </div>

      <div className="md:hidden">
        <div id="menu" className="absolute flex-col items-center hidden self-end py-8 mt-4 space-y-6 font-bold bg-white left-0 right-0 drop-shadow-md sm:w-auto sm:self-center">
          <a href="#about" className="menu-choice border-b-2 border-tertiary">About</a>
          <a href="#skills" className="menu-choice border-b-2 border-tertiary">Skills</a>
          <a href="#projects" className="menu-choice border-b-2 border-tertiary">Projects</a>
          <a href="#contact" className="menu-choice border-b-2 border-tertiary">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;