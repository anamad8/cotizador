import React, { useState, useEffect } from 'react';
import s from './Main.module.css';
import Card from './Card';
import getAllCotizador from '../funciones/getAllCorizador';
import Paginacion from '../paginacion/Paginacion'
import filtrarDatos from '../funciones/filtrarDatos';

import ModalEditar from '../funciones/ModalEditar';

function Main() {

    const [cotizador, setCotizador] = useState([]);

    const [isModalEditar, setIsModalEditar] = useState(false);
    const [cotizadorEditar, setCotizadorEditar] = useState({});

    //paginacion
    const [pagina, setPagina] =useState(1);
    const [porPagina, setPorPagina] =useState(6);
    const max = cotizador.length / porPagina;

    async function busquedaFormHandler(e) {
        e.preventDefault();
        const busqueda = e.target.busqueda.value;
        const nvosDocus = await filtrarDatos(busqueda);
        setCotizador(nvosDocus);
    }

    async function actualizarEstado(){
        getAllCotizador().then((cotizador) => {
            setCotizador(cotizador);
        });
    }
    
    useEffect(() => {
        actualizarEstado();

    }, []);
    
    return (
        <div className={s.main}>
            <form className={s.buscador} onSubmit={busquedaFormHandler}>
                <input type="text"
                    name='buscador'
                    id='busqueda'
                />
                <button>Buscar</button>
            </form>

            
            
        

            {cotizadorEditar &&(<ModalEditar
                isModalEditar={isModalEditar}
                setIsModalEditar={setIsModalEditar}
                actualizarEstado={actualizarEstado}
                setCoticadorEditar={setCotizadorEditar}
            />
            )}
            
        </div>
    );
}

export default Main;

