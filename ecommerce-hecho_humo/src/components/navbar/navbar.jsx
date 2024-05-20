import { Button } from "antd";
import CartWidget from "../cartwidget/cartwidget";
import Logo from "../logo/logo";

const Navbar = () => {
return (
    <div className="barra">
    <div className="btn">
    <Logo />
        <Button>Home</Button>
        <Button>Productos</Button>
        <Button>Contacto</Button>
        <CartWidget />
    </div>
    
    </div>
);
}

export default Navbar;