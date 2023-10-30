import { NavLink } from "react-router-dom";
import { useState } from "react";
import Hamburger from 'hamburger-react'
import { useSelector, useDispatch } from "react-redux";
import { logOut, setUser } from "../Redux/user/userSlice";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const { email } = useSelector(state => state.user)
    const handleLogOut = () => {
        dispatch(logOut())
        dispatch(setUser({
            name:'',
            email:''
        }))
    }
    const navLinks = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/registration',
            title: 'Registration'
        },
        {
            path: email ? '/login' : '/login',
            title: email ? 'Log Out' : 'Login',
            onClick: email ? handleLogOut : null
        }
    ]

    return (
        <nav className="flex relative justify-between items-center px-5 md:px-9 lg:px-12 h-20 bg-white shadow-lg ">
            <img className="h-[80px]" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg" alt="img" />
            <span className="block lg:hidden" ><Hamburger toggled={isOpen} size={20} toggle={setOpen} /></span>

            <div className={`flex flex-col lg:flex-row gap-3  lg:gap-8 transition-all lg:transition-none duration-300 pt-16 lg:pt-0 absolute lg:static top-20  h-[calc(100vh-80px)] lg:h-fit w-full md:w-1/3 lg:w-fit bg-gray-400  lg:bg-transparent items-center ${isOpen ? ' left-0  ' : '-left-[10000px]  '}`}>

                {
                    navLinks.map(({ path, title,onClick }, index) => (
                        <NavLink
                            key={index}
                            to={path}
                            onClick={onClick}
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-semibold" : "font-medium"
                            }
                        >{title}</NavLink>
                    ))
                }
            </div>
        </nav>
    );
};

export default Navbar;