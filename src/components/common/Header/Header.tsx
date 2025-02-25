//library
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full  py-4 px-6 md:px-20">
            <div className="container mx-auto flex items-center justify-between min-h-[34px]">
                <NavLink to="/" className="flex items-center">
                    {/* <img
                        src={logo}
                        alt="Study Spark Logo"
                        className="h-auto w-[125px] md:w-[100px]"
                    /> */}
                    <h1 className="font-black text-3xl">Study Spark</h1>
                </NavLink>

                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-8">
                        <li>
                            <NavLink to="/explore" className="text-gray-800 hover:text-gray-600 text-base font-medium">
                                Explore
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/trainers" className="text-gray-800 hover:text-gray-600 text-base font-medium">
                                Trainers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq" className="text-gray-800 hover:text-gray-600 text-base font-medium">
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us" className="text-gray-800 hover:text-gray-600 text-base font-medium">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Mobile menu button */}
                <button className="md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
export default Header