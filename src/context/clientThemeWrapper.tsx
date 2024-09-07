"use client";
import { createContext, useContext} from 'react';
import {ThemeContext} from './themeContext';

export default function ClientThemeWrapper ({children} : any){
    const {theme} = useContext(ThemeContext);
    return (
        <div data-theme = {theme}>
            {children}
        </div>
    )
}