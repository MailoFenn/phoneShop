import ProductCard from "../ProductCard/ProductCard";
import React from "react";
import './HeadphonePage.css';
import {addToCart} from "../../store/actions/cart.action";
import {Component} from "react";

export default class HeadphonePage extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.state.state.headphones.products.map(e =>
                    <ProductCard
                        className={'card'}
                        key={e.id}
                        addToCart={() => this.props.state.dispatch(addToCart({
                            id: e.id,
                            title: e.title,
                            coast: e.coast
                        }))}
                        coast={e.coast}
                        title={e.title}
                        image={e.image}
                    />
                )}
            </React.Fragment>
        );
    }
}
