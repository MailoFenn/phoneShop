import React, {useState} from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import {Badge, Menu, Modal} from "antd";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import Auth from "../Auth/Auth";


const Header = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={'header'}>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['main']}
                selectedKeys={[]}
            >
                <img alt={'logo'} src={logo} className={'logo'}/>
                <Menu.Item key="main">
                    <NavLink to={'/'}>Главная</NavLink>
                </Menu.Item>
                <Menu.Item key="phone">
                    <NavLink to={'/phones'}>Телефоны</NavLink>
                </Menu.Item>
                <Menu.Item key="cases">
                    <NavLink to={'/cases'}>Чехлы</NavLink>
                </Menu.Item>
                <Menu.Item key="headphones">
                    <NavLink to={'/headphones'}>Наушники</NavLink>
                </Menu.Item>
                <div className={'right_header'}>
                    <UserOutlined className={'account icon'} onClick={showModal}/>
                    <Badge count={props.state.cartCount} className={'shopping_cart icon'}>
                        <NavLink to={'/cart'}><ShoppingCartOutlined/></NavLink>
                    </Badge>
                    <Modal
                        title="Basic Modal"
                        onOk={handleOk} onCancel={handleCancel}
                        visible={isModalVisible}
                        footer={null}
                    >
                        <Auth/>
                    </Modal>
                </div>
            </Menu>
        </div>
    );
}


export default Header;