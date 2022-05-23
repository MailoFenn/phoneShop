import {Button, Card} from 'antd';
import './ProductCard.css';
import phone from '../../images/phone.png';
const { Meta } = Card;

const ProductCard = () => (
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
        <Meta title="iPhone 12" description="89 990 руб." />
        <Button className={'add_to_cart'}>Купить</Button>
    </Card>
);

export default ProductCard;