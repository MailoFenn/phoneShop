import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import {Badge, Menu} from "antd";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

const Header = () => (
    <div className={'header'}>
        <Menu mode="horizontal" defaultSelectedKeys={['phone']}>
            <img alt={'logo'} src={logo} className={'logo'}/>
            <Menu.Item key="phone">
                <NavLink to={'/'}>Телефоны</NavLink>
            </Menu.Item>
            <Menu.Item key="cases">
                <NavLink to={'/cases'}>Чехлы</NavLink>
            </Menu.Item>
            <Menu.Item key="headphones">
                <NavLink to={'/headphones'}>Наушники</NavLink>
            </Menu.Item>
            <div className={'right_header'}>
                <UserOutlined className={'account icon'}/>
                <Badge count={1} className={'shopping_cart icon'}>
                    <ShoppingCartOutlined />
                </Badge>
            </div>
        </Menu>
    </div>
);

export default Header;