import React, { Component } from 'react';
import { connect } from 'react-redux';
import { products } from '../constant/products';
import { formatVND } from '../utils';
import './../styles/products.scss';
import add from '../assets/images/add.png'
import CartIcon from './CartIcon';

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (product) => dispatch({ type: 'ADD_PRODUCT', payload: product })
    }
}

class Products extends Component {

    handleAddProduct = (product) => {
        this.props.addProduct(product);
    }

    render() {
        return (
            <>
                <div className="shopping-cart">
                    <CartIcon />
                </div>
                <div className="product-list">
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="product-item">
                                <img className="product-image" src={product.image} />
                                <div className="product-info">
                                    <div>{product.name}</div>
                                    <div>{formatVND(product.price)} VND</div>
                                </div>
                                <div className="add-button">
                                    <img src={add} onClick={() => this.handleAddProduct(product)} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default connect(null, mapDispatchToProps)(Products);