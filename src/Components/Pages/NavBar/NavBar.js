import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/booking'>Find Reservations</Link></li>
        <li><Link>Packages
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </Link></li>
        <li><Link>About Lakshadweep
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </Link></li>
        <li><Link>About Us</Link></li>
        <li><Link>Gol</Link></li>
        <li><Link>Support</Link></li>
    </React.Fragment>
    return (
        <div>
            <div className="navbar" style={{ background: "#E5F8FE" }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='mr-3' style={{ color: '#3282AD' }}>Login</Link>
                    <Link className="badge p-5" style={{ backgroundColor: '#3282AD', border: '1px solid #3282AD' }}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;