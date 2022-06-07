import {Button, Card} from 'antd';
import './ProductCard.css';
const { Meta } = Card;

const ProductCard = (props) => (
    <Card
        hoverable
        style={{
            width: 240,
            margin: 10,
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
        }}
        cover={<img alt="example" src={props.image} className={'productImage'}/>}
    >
        <div className={'productInfo'}>
            <div className={'productTitle'}>{props.title}</div>
            <div className={'description'}>{props.coast + ' руб.'}</div>
            <Button
                className={'add_to_cart'}
                onClick={() => {props.addToCart()}}
            >
                Купить
            </Button>
        </div>

    </Card>
);

export default ProductCard;