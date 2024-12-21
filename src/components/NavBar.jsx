import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { jobPortalContext } from "../AuthProvider/AuthProvider";
import icon from "../assets/footer.png";

const NavBar = () => {
  const { user, LogOutUser } = useContext(jobPortalContext);

  const handleLogOut = () => {
    LogOutUser()
      .then((result) => {
        console.log("Logout Successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navItem = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>Career</NavLink>
      <NavLink to={"/"}>Rate</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <img className="w-10" src={icon} alt="" />
          <a className="btn btn-ghost text-xl">Job Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-2xl font-semibold space-x-4">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-3">
              <img
                className="w-10 rounded-full p-1 border border-gray-200"
                src={user.photoURL}
                alt=""
              />

              <button
                onClick={handleLogOut}
                className="bg-gray-300 px-5 py-2 rounded-xl"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="space-x-5">
              <NavLink to={"/login"}>
                <button className="bg-gray-300 px-5 py-2 rounded-xl">
                  Log in
                </button>
              </NavLink>
              <NavLink to={"/register"}>
                <button className="bg-gray-300 px-5 py-2 rounded-xl">
                  Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
