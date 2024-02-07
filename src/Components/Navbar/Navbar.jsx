import { Link, NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";


const Navbar = () => {

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/aboutUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
            }
        >
            About Us
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
            }
        >
            Contact
        </NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 border border-t-0 border-r-0 border-l-0">
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl gap-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <Link to='/dashBoard'>
                            <div className="indicator">
                                <IoBagHandleOutline className="text-2xl" />
                                <span className="badge badge-xs indicator-item p-2 bg-black text-white">+0  </span>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;