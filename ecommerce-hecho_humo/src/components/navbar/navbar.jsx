import { Button } from "antd";
import CartWidget from "../cartwidget/cartwidget";


const Navbar = () => {
return (
    <div>
    <h3>Hecho Humo</h3>
    <div className="btn">
        <Button>Home</Button>
        <Button>Productos</Button>
        <Button>Contacto</Button>
        <CartWidget />
    </div>
    
    </div>
);
}

export default Navbar;