import React, { useContext } from 'react'
import { Badge } from 'antd';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
const { cantidad } = useContext(CartContext)
    return (
        <div>
            
                <Badge count={cantidad}>
                    <ShoppingCartOutlined style={{fontSize: '30px', color: '#ffffff', margin: '10px' }} />
                </Badge>
            
        </div>
    );
};

export default CartWidget;
