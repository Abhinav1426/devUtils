"use client";
import { constrainedMemory } from 'process';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState('light');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);
    if(!isMounted){
        return <>Loading ....</>;
    }
    const changeTheme = (theme : string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    const getCurrtentTheme = () => {
        const storedTheme = localStorage.getItem("theme") || "light";
        return storedTheme;
    };
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            { children}
        </ThemeContext.Provider>
    )
}
