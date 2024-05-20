import React from 'react'
import { Avatar, Badge, Space } from 'antd'

const CartWidget = () => {
    return(
        <Badge count={4}>
        <Avatar shape="square" size="large" />
    </Badge>
    )
}

export default CartWidget