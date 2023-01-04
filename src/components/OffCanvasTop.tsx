import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const OffCanvasExample = ({ name, ...props } : any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <OffCanvasContainer>
      <Button onClick={handleShow}  className="me-2">
        |||
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
              <Link onClick={handleClose} to='./Products'>  <h3>Menu</h3></Link>
              <Link onClick={handleClose} to='./Promociones'><h3>Promociones</h3></Link>
              <a onClick={handleClose} className="hide" href="https://pedidos.masdelivery.com/ikkenai" target="_blank"><h3>Pedido Online</h3></a>
              <Link onClick={handleClose} to='./Contacto'><h3>Contacto</h3></Link>
        </Offcanvas.Body>
      </Offcanvas>
    </OffCanvasContainer>
  );
}

const OffCanvasTop = () => {
  return (
    <>
      {['top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export {OffCanvasExample, OffCanvasTop}

const OffCanvasContainer = styled.div`
  .btn {
    background-color: ${props => props.theme.primary};
    border: none;
    a {
      color: ${props => props.theme.fontPrim}
    }
  }

  display: none;
  @media (max-width: 991px) {
  display: inline-block; 
  }

  `