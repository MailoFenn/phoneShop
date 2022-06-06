import ProductCard from "../ProductCard/ProductCard";
import React from "react";
import './PhonePage.css';
import {addToCart} from "../../store/actions/cart.action";

const PhonePage = (props) => {
    return (
        <React.Fragment>
            {props.state.state.phone.products.map(e =>
                <ProductCard
                    className={'card'}
                    key={e.id}
                    addToCart={() => props.state.dispatch(addToCart({
                        id: e.id,
                        title: e.title,
                        coast: e.coast
                    }))}
                    coast={e.coast}
                    title={e.title}
                />
            )}
        </React.Fragment>
    );
}

export default PhonePage;