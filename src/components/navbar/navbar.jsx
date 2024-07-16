import React, { Component } from 'react';
import { Navbar, Collapse, BDiv, Form, Button } from 'bootstrap-4-react';
import CartWidget from "../cartwidget/cartwidget";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";
import Insta from "../logo/instagram";
import Whatsapp from "../logo/wp";


export default class App extends Component {
    render() {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
            <Link to={'/'}>
                    <Logo />
                </Link>
                <Link to={'https://www.instagram.com/hechohumo.ok/'}>
                    <Insta />
                    </Link>
                    <Link to={'https://wa.me/541168226178'}>
                    <Whatsapp />
                    </Link>
                    <Link to={'/cart'}>
                    <CartWidget />
                    </Link>
                    </div>
                    
                
                
        <Collapse id="navbarToggleExternalContent">
    <BDiv >
        <header>
        <Form  display="flex" p="2" my="2 lg-1" >
            <Form.Input type="" placeholder="Buscador" mr="sm-1" />
            <Link to={"/"}>
            <Button outline warning my="2 sm-0">Buscar</Button>
            </Link>
            
        </Form>
            <nav className="barra">
                <div className="btn">
                    <Link to={'/'}>
                        <button className="boton">Productos</button>
                    </Link>
                    <Link to={'/Category/Ceniceros'}>
                        <button className="boton">Ceniceros</button>
                    </Link>
                    <Link to={'/Category/Encendedores'}>
                        <button className="boton">Encendedores</button>
                    </Link>
                    <Link to={'/Category/Papelillos'}>
                        <button className="boton">Papelillos</button>
                    </Link>
                    <Link to={'/Category/Reprocan'}>
                        <button className="boton">Reprocan</button>
                    </Link>

                    
                </div>
            </nav>
        </header>
        </BDiv>
        </Collapse>
        <Navbar dark >
        <Navbar.Toggler target="#navbarToggleExternalContent" />
        </Navbar>
    </div>
    )
}
}