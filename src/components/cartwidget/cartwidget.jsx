import React from 'react';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';


const CartWidget = () => {
    

    return (
        <div>
            <Link to="/carrito">
                <Badge count={1}>
                    <ShoppingCartOutlined style={{ fontSize: '30px', color: '#ffffff', margin: '10px' }} />
                </Badge>
            </Link>
        </div>
    );
};

export default CartWidget;
