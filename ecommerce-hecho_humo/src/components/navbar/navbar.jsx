import CartWidget from "../cartwidget/cartwidget";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";
import Insta from "../logo/instagram";
import Whatsapp from "../logo/wp";

const Navbar = () => {
    return (
        <header>
            <nav className="barra">
                <Link to={'/'}>
                    <Logo />
                </Link>
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
                    <CartWidget />
                    <Link to={'https://www.instagram.com/hechohumo.ok/'}>
                    <Insta />
                    </Link>
                    <Link to={'https://www.instagram.com/hechohumo.ok/'}>
                    <Whatsapp />
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;