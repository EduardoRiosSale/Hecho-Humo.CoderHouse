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
            <Link to={'/'}>
                    <Logo />
                </Link>
                <Form  display="flex" p="2" my="2 lg-0" >
            <Form.Input type="search" placeholder="Buscador" mr="sm-3" />
            <Button outline warning my="2 sm-0">Search</Button>
        </Form>
                
        <Collapse id="navbarToggleExternalContent">
    <BDiv >
        <header>
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
                    <Link to={'https://www.instagram.com/hechohumo.ok/'}>
                    <Insta />
                    </Link>
                    <Link to={'https://www.instagram.com/hechohumo.ok/'}>
                    <Whatsapp />
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