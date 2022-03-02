import React, { useState, useEffect } from 'react';
import s from './Description.module.css';
import { Link, NavLink } from 'react-router-dom';
import getAllCotizador from '../funciones/getAllCorizador';
import Paginacion from '../paginacion/Paginacion';
import filtrarDatos from '../funciones/filtrarDatos';
import icon from '../../img/icom-flecha.svg';
import ModalEditar from '../funciones/ModalEditar';
import iconPDF from '../../img/icons-PDF.png';
import Carrito from '../carrito/Carrito';


function Description () {

    const [cotizador, setCotizador] = useState([]);
    
    //Modal
    const [isModalEditar, setIsModalEditar] = useState(false);
    const [cotizadorEditar, setCotizadorEditar] = useState(null);

    // Estado del carrito
    const [cart, setCart] = useState([]);

    const [shouldDisplay, setShouldDisplay] =useState(false);
    const viewCart= () => setShouldDisplay(true);
    const closeDiv = ()=> setShouldDisplay(false);
    
    console.log('cart: ', cart)


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

    // agregar al carrito de PDF
    const addCarrito = (titulo) => {
        const añadoPdf = cotizador.filter((c) => c.titulo === titulo);
        setCart([...cart, ...añadoPdf]);

        console.log(cart.length);
    };

    useEffect(() => {
        
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if(dataCarrito){
            setCart(dataCarrito)
        }
        actualizarEstado();

    }, []);

    useEffect(() =>{
        localStorage.setItem('dataCarrito',JSON.stringify(cart))
    },[cart] )

    return <>
        <div className={s.encavezado}>
            <h2>Detalles</h2> 
            
            <div>
                <button className={s.PDF}
                    type="button"
                    onClick={() => viewCart()}>
                    <img src={iconPDF} alt="icon"/>
                </button>
            </div>
            <div className={s.cartDiv + s.cartDiv2} >
                <button
                className={s.btnClose}
                type="button"
                onClick={() => closeDiv()}
                >
                X
                </button>
                {shouldDisplay && <div className={s.cartDiv2} >
                
                    {cart.map((c) => (
                        <Carrito key={c.key} titulo={c.titulo} cart={cart} setCart={setCart}/>
                    ))}
                        <NavLink to='/pdf' className={s.btnPdf}>Ver</NavLink>
                    </div>

                }
                
            </div>
            <div>
                <Link to='/'><img src={icon} alt="" /> </Link>
            </div>
        </div>

        {
            cotizadorEditar && (<ModalEditar
                isModalEditar={isModalEditar}
                setIsModalEditar={setIsModalEditar}
                actualizarEstado={actualizarEstado}
                cotizadorEditar={cotizadorEditar}
                setCotizadorEditar={setCotizadorEditar}
            
            />)
        }


        <div className={s.conteiner} onSubmit={busquedaFormHandler}>
            
            <table >
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Area</th>
                        <th>Servicio</th>
                        <th>Contenido</th>
                        <th>Paquete</th>
                        <th>Plazo</th>
                        <th>Costo Mensual</th>
                        <th>Costo Total</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                
                    {
                        
                        cotizador.slice (
                            (pagina - 1) * porPagina,
                            (pagina - 1) * porPagina + porPagina
                        ).map((c, index) => (
                            <tbody>
                            <tr key={index}>
                            <td className={s.alto}>{c.titulo}</td>
                            <td className={s.alto}>{c.area}</td>
                            <td className={s.alto}>{c.servicio}</td>
                            <td className={s.alto}>{c.contenido}</td>
                            <td className={s.alto}>{c.paquete}</td>
                            <td className={s.alto}>{c.plazo}</td>
                            <td className={s.alto}>{c.costoMensual}</td>
                            <td className={s.alto}>{c.costoTotal}</td>
                            <td className={s.alto}>{c.descripcion}</td>
                            
                            <td className={s.alto}>
                                <button className={s.btn}  onClick={() => {
                                    setCotizadorEditar({ ...c });
                                    setIsModalEditar(true);
                                }}
                                >Editar</button>
                                <button className={s.btn} onClick={() => {
                                    setCart({ ...c })
                                    addCarrito(c.titulo)
                                    
                                }}>PDF</button>
                            </td>
                        </tr>
                        </tbody>
                        ))}
                
            </table>
            
        </div>


        

        <Paginacion pagina={pagina} setPagina={setPagina} max={max}/>
    </>;
}

export default Description;
