import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListUser } from '../actions/actionUser';

const mapDispatchToProps = dispatch => {
    return {
        getListUser: () => dispatch(getListUser())
    }
}

const mapStateToProps = (state) => ({
    users: state.userReducer
});

class User extends Component {

    componentDidMount() {
        this.props.getListUser();
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                {users.map((user, index) => {
                    return (
                        <div key={index} style={{ padding: '10px' }}>
                            <div>Name: {user.name}</div>
                            <div>UserName: {user.username}</div>
                            <div>Phone: {user.phone}</div>
                            <div>Email: {user.email}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
