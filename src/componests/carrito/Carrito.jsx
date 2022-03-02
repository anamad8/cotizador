import React from 'react';
import s from './Carrito.module.css'

function Carrito({titulo, cart, setCart}) {

    const elimunarPdf = (titulo) => {
        const eliminar = cart.filter((c) => c.titulo !==titulo);
        setCart(eliminar);
      };
  return (
    <>
    <div  className={s.cart}>
        <p>{titulo}</p>
        <button
            className={s.btnX}
            type="button"
            onClick={() => elimunarPdf(titulo)}
          >
            X
          </button>
    </div>
    
    </>
  )
}

export default Carrito