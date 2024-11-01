import Logo from "./logo";
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <a>Item 1</a>
      </li>

      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-black bg-opacity-40  fixed z-10 backdrop-blur-sm max-w-screen-xl">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            {" "}
            <Logo />
          </a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Profile</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
