import React,{useState} from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";
import iconPDF from '../../img/icons-PDF.png'

function Header() {

    return (
        <div className={s.header}>
            <div className={s.img}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
        </div>
    );
}

export default Header;