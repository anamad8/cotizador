import React, { useState } from 'react';
import s from './Form.module.css';
import añadirCotizacion from '../funciones/añadirCotizacion';

function Form() {

    const [values,setValues] = useState({
        area:'',
        servicio:'',
        contenido:'',
        paquete:'',
        titulo: '',
        plazo:'',
        costoMensual:'',
        costoTotal:'',
        descripcion:'',
    });

    const hasdelInputChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
            
        });
    }
    // console.log(values)
    const hasdleSumit = async (e) =>{
        e.preventDefault();
        //obtener infor del formulario
        const titulo = document.getElementById("titulo").value;
        const area = document.getElementById("area").value;
        const contenido = document.getElementById("contenido").value;
        const paquete = document.getElementById("paquete").value;
        const plazo = document.getElementById("plazo").value;
        const costoMensual = document.getElementById("costoMensual").value;
        const costoTotal = document.getElementById("costoTotal").value;
        const descripcion = document.getElementById("descripcion").value;
        const servicio = document.getElementById("servicio").value;
        // añadirCotizacion(values);
        const infoCotizador = { area,servicio,titulo,contenido,paquete,plazo,costoMensual,costoTotal,descripcion };
        añadirCotizacion(infoCotizador);

        console.log(values)
        
        setValues({
            area:'',
            servicio:'',
            contenido:'',
            paquete:'',
            titulo: '',
            plazo:'',
            costoMensual:'',
            costoTotal:'',
            descripcion:'',
        })

    }

    return (
        <div className={s.form} >
            <h2>Fromulario:</h2>
            <form className={s.contenido} onSubmit={hasdleSumit} >
                <div className={s.input}>
                    <label>Titulo-Id:</label>
                    <input type="text"
                        name='titulo'
                        id='titulo'
                        value={values.titulo}
                        onChange={hasdelInputChange}/>
                </div>

                <div className={s.input}>
                    <label>Servicio:</label>
                    <input type="text" 
                        name='servicio'
                        id='servicio'
                        value={values.servicio}
                        onChange={hasdelInputChange}/>
                </div>

                <div className={s.input}>
                    <label>Contenido:</label>
                    <input type="text" 
                        name='contenido'
                        id='contenido'
                        value={values.contenido}
                        onChange={hasdelInputChange}/>
                </div>

                <div className={s.input}>
                    <label>Paquete:</label>
                    <input type="text" 
                        name='paquete'
                        id='paquete'
                        value={values.paquete}
                        onChange={hasdelInputChange}/>
                </div>
                
                <div className={s.input}>
                    <label>Plazo:</label>
                    <input type="text" 
                        name='plazo'
                        id='plazo'
                        value={values.plazo}
                        onChange={hasdelInputChange}/>
                </div>

                <div className={s.input}>
                    <label>Costo mensual:</label>
                    <input type="number"
                        name='costoMensual'
                        id='costoMensual'
                        value={values.costoMensual}
                        onChange={hasdelInputChange}
                    />
                </div>

                <div className={s.input}>
                    <label>Costo total:</label>
                    <input type="number" 
                        name='costoTotal'
                        id='costoTotal'
                        value={values.costoTotal}
                        onChange={hasdelInputChange}/>
                </div>

                <div className={s.input}>
                    <label>Área:</label>
                    <input type="text" 
                        name='area'
                        id='area'
                        value={values.area}
                        onChange={hasdelInputChange}/>
                </div>

                <div className={s.input}>
                    <label>Descripción:</label>
                    <textarea className="form-control" 
                        name='descripcion'
                        id='descripcion'
                        value={values.descripcion}
                        onChange={hasdelInputChange}>
                    </textarea>
                </div>
                <button className={s.btnFrom} >Enviar</button>
            </form>
        </div>
    );
}

export default Form;

