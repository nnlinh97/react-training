const initState = [];

export const userReducer = (state = initState, action) => {
    // xử lí các action và update lại state
    switch (action.type) {
        case 'GET_LIST_USER':
            state = [...action.payload];
            return [...state];

        default:
            return [...state];
    }


}