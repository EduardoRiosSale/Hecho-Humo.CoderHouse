import React, { useContext } from 'react'
import { Badge } from 'antd';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
const { cart } = useContext(CartContext)
    return (
        <div>
            
                <Badge count={cart.length}>
                    <ShoppingCartOutlined style={{fontSize: '30px', color: '#ffffff', margin: '10px' }} />
                </Badge>
            
        </div>
    );
};

export default CartWidget;
