import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { logoutFromCMDBuild } from '../services/authServices';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = Cookies.get('CMDBuild-Authorization');
        setIsLoggedIn(!!token);
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await logoutFromCMDBuild();
            setIsLoggedIn(false);
            navigate('/');
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };

    const isActive = (path) => (location.pathname === path ? 'active' : '');

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
                scrolled ? 'bg-primary-hover shadow-md' : 'bg-transparent'
            }`}>
            <div className="navbar container mx-auto px-6">
                <div className="navbar-start">
                    <Link to="/" className="text-2xl font-bold text-white pr-4">
                        Geoportal
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        <li>
                            <Link to="/" className={`nav-link ${isActive('/')} text-white hover:text-accent`}>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link to="/aplikasi" className={`nav-link ${isActive('/aplikasi')} text-white hover:text-accent`}>
                                Aplikasi
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className={`nav-link ${isActive('/services')} text-white hover:text-accent`}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/data" className={`nav-link ${isActive('/data')} text-white hover:text-accent`}>
                                Data
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {isLoggedIn ? (
                        <div id="user-menu" className="flex items-center space-x-4">
                            <div className="dropdown dropdown-end">
                                <div tabIndex="0" role="button" className="btn btn-ghost rounded-full w-10">
                                    <button className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-accent"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                />
                                            </svg>
                                            <span className="badge badge-xs badge-error indicator-item"></span>
                                        </div>
                                    </button>
                                </div>
                                <ul tabIndex="0" className="menu dropdown-content bg-white rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                    <span className="text-primary">Notifikasi</span>
                                    <li>
                                        <a className="text-dark">Silahkan selesaikan monitoring</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown dropdown-end">
                                <div tabIndex="0" role="button" className="btn rounded-full w-10">
                                    <div className="avatar">
                                    <div className="w-10 ">
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                            alt="User Avatar"
                                        />
                                    </div>

                                    </div>
                                </div>
                                <ul tabIndex="0" className="menu avatar-dropdown dropdown-content bg-white rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                    <li>
                                        <a onClick={handleLogout} className="text-black hover:bg-red-100">Keluar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="btn bg-secondary text-black hover:bg-secondary-hover border-none shadow-md hover:shadow-lg">
                            Masuk
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
