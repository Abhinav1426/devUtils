
"use client";
import { ThemeContext } from '@/context/themeContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { FaRegMoon } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSunnyOutline } from 'react-icons/io5';

const NavBar = () => {
    // eslint-disable-next-line
    const { changeTheme } = useContext(ThemeContext) as { changeTheme: (theme: string) => void };
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [icon, setIcon] = useState(<IoSunnyOutline size={20}/>);
    const onClickChangeTheme = () => {
        const newTheme = theme === "light" ? "black" : "light";
        setTheme(newTheme);
        changeTheme(newTheme);
        setIcon(newTheme === "light" ? <IoSunnyOutline size={20}/> : <FaRegMoon size={20}/>);
    };
    return (
        <div className='navbar bg-base-100 justify-between'>
                <div className='pl-10 '>
                    <Link href="/utilities">
                        <button className='btn btn-circle btn-outline'>
                            <IoIosArrowBack />
                        </button>
                    </Link>
                </div>

                <div className='pr-10 '>
                        <button className='btn btn-circle btn-outline' onClick={onClickChangeTheme}>
                            {icon}
                        </button>
                </div>
        </div>
    )
}

export default NavBar;
