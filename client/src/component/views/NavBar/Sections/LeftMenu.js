import React from 'react';
import { Menu } from 'antd';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const menuItems = [
    getItem(<a href='/' />, 'Home'),
    getItem('item1', 'sub1', null, [
        getItem('Option 1', 'a'),
        getItem('Option 2', 'b'),
    ]),
    getItem('item2', 'sub2', null, [
        getItem('Option 3', 'c'),
        getItem('Option 4', 'd'),
    ])
]

function LeftMenu(props) {
    return (
        <Menu
            mode={props.mode}
            items={menuItems}
        >
        </Menu>
    )
}

export default LeftMenu