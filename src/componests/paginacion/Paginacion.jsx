import React, { useState } from 'react';
import s from './Paginacion.module.css';
import Card from '../main/Card';

function Paginacion({pagina, setPagina, max}) {

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput (parseInt(input) + 1);
        setPagina (parseInt(pagina) + 1);
    };

    const previousPage = () => {
        setInput (parseInt(input) - 1);
        setPagina (parseInt(pagina) - 1);
    };

    const onKeyDown = e => {
        if (e.keyCode == 13) {
          setPagina (parseInt (e.target.value));
          if (
            parseInt (e.target.value < 1) ||
            parseInt (e.target.value) > Math.ceil (max) ||
            isNaN (parseInt (e.target.value))
          ) {
            setPagina (1);
            setInput (1);
          } else {
            setPagina (parseInt (e.target.value));
          }
        }
      };
    
    
    return(
        <>
            <div className={s.page}>
                <button className={s.page_btn}  onClick={previousPage} 
                disabled={pagina === 1 || pagina < 1}>&laquo;</button>
                    <h2 onKeyDown={onKeyDown }>{input}</h2>
                <button className={s.page_btn} onClick={nextPage} 
                    disabled={pagina === Math.ceil (max) || pagina > Math.ceil (max)} >&raquo;</button>
            </div>

        </>
    )
}

export default Paginacion;
