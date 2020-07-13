import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
    componentDidMount() {
        console.log(this.props.match);
    }

    render() {
        return (
            <div>
                ProductDetail
            </div>
        );
    }
}

ProductDetail.propTypes = {

};

export default ProductDetail;