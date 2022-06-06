import {Button, Card} from 'antd';
import './ProductCard.css';
import phone from '../../images/phone.png';
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
        cover={<img alt="example" src={phone} />}
    >
        <Meta title={props.title} description={props.coast} />
        <Button
            className={'add_to_cart'}
            onClick={() => {props.addToCart()}}
        >
            Купить
        </Button>
    </Card>
);

export default ProductCard;