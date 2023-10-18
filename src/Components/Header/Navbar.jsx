import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOUt = () => {
        logOut()
            .then(() => toast('You are signed out'))
            .catch(error => console.error(error))
    }


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to="/addProduct">Add Product</NavLink></li>


            </>
        }

    </>

    return (
        <div className="navbar container bg-base-200 mx-auto px-4 ">
            <div className="navbar-start">
                <div className="dropdown font-bold">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href="#" className=" cursor-pointer normal-case text-xl font-extrabold lg:text-3xl"><NavLink to='/'>TekzySpark</NavLink></a>
            </div>
            <div className="navbar-end">
                <button className="hidden lg:block lg:px-4">
                    <a ><NavLink to="/myCart">My Cart</NavLink></a>
                </button>
                {
                    user ? <>
                        <span className="  font-bold p-2">{user.displayName
                        }</span>
                        <div className="flex items-center">

                            <img className="btn btn-ghost btn-circle avatar" src={user.photoURL
                            } />
                            <a onClick={handleLogOUt} className="btn btn-sm font-bold">Sign Out</a>
                            <ToastContainer />
                        </div>
                    </>
                        :
                        <NavLink to="/signIn">
                            <a className=" font-bold">Sing In</a>
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;