import React from 'react';
import { Link } from 'react-router-dom';
import From from '../form/Form';
import s from './Home.module.css'

function Home() { 
    return <div className={s.home}>
        <From />

        <Link to='descriptio'>Contenido de la base de datos</Link>
        
    </div>;
    }

export default Home;
