import React, { useState, useEffect } from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import editarCotizado from "./editarCotizado";

function ModalEditar({
  isModalEditar,
  setIsModalEditar,
  actualizarEstado,
  cotizadorEditar,
  setCotizadorEditar,
}) {
  function editarProductoModal() {
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
    // enviar informacion a firebase
    const info = { area,servicio,titulo,contenido,paquete,plazo,costoMensual,costoTotal,descripcion };
    editarCotizado(info);
    // cerrar modal
    setCotizadorEditar(null);
    actualizarEstado();
    setIsModalEditar(false);
  }

  const [productoEstado, setProductoEstado] = useState({
    ...cotizadorEditar,
  });

  // console.log('estado: ',cotizadorEditar)

  return (
    <Modal show={isModalEditar} onHide={() => setIsModalEditar(false)}>
      <Modal.Header>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
               id="titulo"
               placeholder="titulo"
               type="text"
               className="mb-1"
               value={productoEstado?.titulo}
               onChange={(e) =>
                 setProductoEstado({
                   ...productoEstado,
                   titulo: e.target.value,
                 })
               }
            />
            <Form.Control
              id="servicio"
              placeholder="servicio"
              type="text"
              className="mb-1"
              value={productoEstado?.servicio}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  servicio: e.target.value,
                })
              }
            />
            <Form.Control
              id="contenido"
              placeholder="contenido"
              type="text"
              className="mb-1"
              value={productoEstado?.contenido}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  contenido: e.target.value,
                })
              }
            />
            <Form.Control
              id="paquete"
              placeholder="paquete"
              type="text"
              className="mb-1"
              value={productoEstado?.paquete}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  paquete: e.target.value,
                })
              }
            />
            <Form.Control
              id="plazo"
              placeholder="plazo"
              type="text"
              className="mb-1"
              value={productoEstado?.plazo}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  plazo: e.target.value,
                })
              }
            />
            <Form.Control
              id="costoMensual"
              placeholder="Costo Mensual"
              type="number"
              className="mb-1"
              value={productoEstado?.costoMensual}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  costoMensual: e.target.value,
                })
              }
            />
            <Form.Control
              id="costoTotal"
              placeholder="Costo Total"
              type="number"
              className="mb-1"
              value={productoEstado?.costoTotal}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  costoTotal: e.target.value,
                })
              }
            />
            <Form.Control
              id="area"
              placeholder="area"
              type="text"
              className="mb-1"
              value={productoEstado?.area}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  area: e.target.value,
                })
              }
            />
            <Form.Control
              id="descripcion"
              placeholder="descripcion"
              type="text"
              className="mb-1"
              value={productoEstado?.descripcion}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  descripcion: e.target.value,
                })
              }
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalEditar(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditar;