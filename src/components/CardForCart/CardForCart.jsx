import {Card} from 'antd';
import React from 'react';
import image from '../../images/phone.png';
import './CardForCart.css';
import {CloseOutlined} from "@ant-design/icons";

const CardForCart = (props) => {
    return (
        <Card
            style={{
                marginBottom: 30,
                paddingLeft: 0,
                width: 600
            }}
        >
            <div className={'container'}>
                <img alt={props.title} src={image} className={'image'}/>
                <div className={'info'}>
                    <p className={'title'}>{props.title}</p>
                    <p className={'coast'}>{props.coast} руб</p>
                </div>
                <div>
                    <p>{props.quantity} шт.</p>
                </div>
                <CloseOutlined
                    className={'close'}
                    onClick={props.delete}
                />
            </div>
        </Card>
    )
}

export default CardForCart