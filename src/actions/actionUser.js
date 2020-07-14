import axios from 'axios';

export const getListUser = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch({
                    type: 'GET_LIST_USER',
                    payload: response.data
                });
            })
            .catch((error) => {
                // TODO
            });
    }
}