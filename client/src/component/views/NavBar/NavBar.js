import React, { useState } from 'react'
import LeftMenu from './Sections/LeftMenu'
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Space } from 'antd';
import Icon from '@ant-design/icons';
import './Sections/NavBar.css';
function NavBar() {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    };
    const onClose = () => {
        setOpen(false)
    };
    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
            <div className="menu__logo">
                <a href="/">Logo</a>
            </div>
            <div className="menu__container">
                <div className="menu_left">
                    <LeftMenu mode="horizontal" />
                </div>
                <div className="menu_rigth">
                    <RightMenu mode="horizontal" />
                </div>
                {/* <Button
                    className="menu__mobile-button"
                    type="primary"
                    onClick={showDrawer}
                >
                    <Space type="align-right" />
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onClose={onClose}
                    open={open}
                >
                    <LeftMenu mode="inline" />
                    <RightMenu mode="inline" />
                </Drawer> */}
            </div>
        </nav>
    )
}

export default NavBar
