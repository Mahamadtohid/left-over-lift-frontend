import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';



function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showAboutSubMenu, setShowAboutSubMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getLinkClass = ({ isActive }) =>
        isActive ? 'text-green-600 font-semibold font-poppins' : 'hover:text-green-600 transition font-poppins';

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <NavLink to="/" className="hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-4xl font-bold tracking-tight text-green-700 ">
                            Left<span className="text-gray-800">Over</span><span className="text-orange-500">Lift</span>
                        </span>
                        <span className="text-sm text-black-500 font-bold">Saving surplus. Serving smiles.</span>
                    </div>
                </NavLink>

                <div className="md:hidden text-4xl cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </div>

                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <NavLink to="/" className={getLinkClass}>Home</NavLink>
                    <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>

                    <div className="relative group">
                        <NavLink to="/about" className={getLinkClass}>About</NavLink>
                        {/* <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded py-2 w-40 z-50">
                            <NavLink to="/about/team" className="block px-4 py-2 hover:bg-gray-100">Our Team</NavLink>
                            <NavLink to="/about/mission" className="block px-4 py-2 hover:bg-gray-100">Our Mission</NavLink>
                            <NavLink to="/about/partners" className="block px-4 py-2 hover:bg-gray-100">Partners</NavLink>
                        </div> */}
                    </div>
                </nav>

                <div className="hidden md:flex gap-4">
                    <NavLink to="/sign-in" className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 border border-green-600 text-white bg-green-600 rounded'
                            : 'px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-700 hover:text-white transition'}>
                        Sign In
                    </NavLink>
                    <NavLink to="/select-role" className={({ isActive }) =>
                        isActive
                            ? 'px-4 py-2 bg-green-700 text-white rounded'
                            : 'px-4 py-2 bg-green-600 text-white rounded hover:bg-white hover:text-green-700 transition'}>
                        Sign Up
                    </NavLink>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3 text-gray-700 font-medium">
                    <NavLink to="/" className={getLinkClass} onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/contact" className={getLinkClass} onClick={toggleMenu}>Contact</NavLink>
                    <NavLink to="/about" className={getLinkClass} onClick={toggleMenu}>About</NavLink>

                    {/* <div> */}
                        {/* <button onClick={() => setShowAboutSubMenu(!showAboutSubMenu)} className="text-left w-full hover:text-green-600 transition">
                            About
                        </button> */}
                        {/* {showAboutSubMenu && (
                            <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3 text-gray-700 font-medium">
                                <NavLink to="/about/team" className={getLinkClass} onClick={toggleMenu}>Our Team</NavLink>
                                <NavLink to="/about/mission" className={getLinkClass} onClick={toggleMenu}>Our Mission</NavLink>
                                <NavLink to="/about/partners" className={getLinkClass} onClick={toggleMenu}>Partners</NavLink>
                            </div>
                        )} */}
                    {/* </div> */}

                    <NavLink to="/sign-in" className={getLinkClass} onClick={toggleMenu}>Sign In</NavLink>
                    <NavLink to="/select-role" className={getLinkClass} onClick={toggleMenu}>Sign Up</NavLink>
                </div>
            )}
        </header>
    );
}

export default NavBar;
