    import React, { useState } from 'react';
    import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
    const UserIcon = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative flex items-center  transition duration-300 ease-in-out transform hover:scale-110">

        <span className="hidden md:inline text-sm cursor-pointer">Log in</span>
        <FiUser className="text-2xl ml-2 cursor-pointer" />
        {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-md p-4">
            <ul>
             <Link to={`/user/profile`}>
                <li className="py-1 text-black">Profile</li>
                </Link>
                <Link to={`/settings`}>
                <li className="py-1 text-black">Settings</li>
                </Link>
                <Link to={`/user/logout`}>
                <li className="py-1 text-black">Logout</li>
                </Link>
            </ul>
            </div>
        )}
        </div>
    );
    };

    export default UserIcon;
