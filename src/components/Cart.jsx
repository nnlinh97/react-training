import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatVND, countPrice } from '../utils';
import '../styles/cart.scss';
import CartIcon from './CartIcon';

const mapStateToProps = (state) => ({
  cart: state.cartReducer
});

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product) => dispatch({ type: 'ADD_PRODUCT', payload: product }),
    decrementProduct: (product) => dispatch({ type: 'DECREMENT_PRODUCT', payload: product }),
    removeProduct: (product) => dispatch({ type: 'REMOVE_PRODUCT', payload: product }),
  }
}

class Cart extends Component {

  handleDecrementProduct = (product) => {
    this.props.decrementProduct(product);
  }

  handleAddProduct = (product) => {
    this.props.addProduct(product)
  }

  handleRemoveProduct = (product) => {
    this.props.removeProduct(product);
  }

  render() {
    const { cart } = this.props;
    return (
      <>
        <div className="shopping-cart">
          <CartIcon />
        </div>
        <div className="cart-title">
          {!!cart.length ? 'Danh sách sản phẩm đã chọn' : 'Giỏ hàng đang trống'}
        </div>
        {!!cart.length && <>
          <div className="cart-list">
            {cart.map((item, index) => {
              return (
                <div key={index} className="cart-item">
                  <img className="product-image" src={item.image} />
                  <div className="product-info">
                    <div>{item.name}</div>
                    <div>{formatVND(item.price)} VND</div>
                    <div onClick={() => this.handleRemoveProduct(item)} className="delete-btn">xóa</div>
                  </div>
                  <div className="count-item">x{item.count}</div>
                  <div className="count-price">{formatVND(item.price * item.count)} VND</div>
                  <div className="button-group">
                    <button onClick={() => this.handleDecrementProduct(item)} className="btn-decre">-</button>
                    <button onClick={() => this.handleAddProduct(item)}>+</button>
                  </div>
                </div>
              );
            })}

          </div>
          <hr />
          <div className="total-price">
            Tổng: {formatVND(countPrice(cart))} VND
        </div>
        </>}

      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);