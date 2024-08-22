import {NavLink} from "react-router-dom"

function Header () {
    <>
        <header className = "print:hidden flex px-24 p-12 bg-transparent border justify-between">
        <a href="/" className="logo">
            <h1 ClassName="text-4xl" > <p>CV-</p><p>Maker</p></h1>
        </a>

        <nav className="flex justify-end items-center gap-12">
          <NavLink className={({ isActive }) => (isActive ? 'text-2xl nav-link underline' : 'text-2xl nav-link')} exact="true" to="">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-2xl nav-link underline' : 'text-2xl nav-link')} exact="true" to="builder">Builder</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-2xl nav-link underline' : 'text-2xl nav-link')} to="blog">Blog</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-2xl nav-link underline' : 'text-2xl nav-link')} exact="true" to="about">About</NavLink>
        </nav>
        </header>
    </>
}
export default 