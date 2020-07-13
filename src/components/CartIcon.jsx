import React, { Component } from 'react';
import { connect } from 'react-redux';
import cartIcon from '../assets/images/cart.png';
import { countItem } from '../utils';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    cart: state.cartReducer
});

class CartIcon extends Component {
    render() {
        const { cart } = this.props;
        const total = countItem(cart);
        return (
            <Link to="/cart">
                <img src={cartIcon} />
                {!!total && <div className="count-item">{total}</div>}
            </Link>
        );
    }
}

export default connect(mapStateToProps, null)(CartIcon);
