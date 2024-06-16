import  hechohumo2  from "../img/hechohumo2.png";
import CartWidget from "../cartwidget/cartwidget";

const Logo = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
    <img className='img' src={hechohumo2} />
    <div style={{margin: "30px"}}>
    <CartWidget />
    </div>
    </div>
)
}

export default Logo