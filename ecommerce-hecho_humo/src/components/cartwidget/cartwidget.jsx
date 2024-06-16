import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
const CartWidget = () => {
    return(
        <div>
        <Badge count={1} >
        <ShoppingCartOutlined style={{width: "30px", color: "white"}}/>
    </Badge>
    </div>
    )
}

export default CartWidget