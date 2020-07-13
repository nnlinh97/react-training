import React, { Component } from 'react';

class Header extends Component {
    render() {
        this.props.message = 'new message';
        return (
            <div>
                PROPS
            </div>
        );
    }
}

export default Header;