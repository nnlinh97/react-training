const initState = [];

export const cartReducer = (state = initState, action) => {
    // xử lí các action và update lại state
    switch (action.type) {
        case 'ADD_PRODUCT':
            const index = state.findIndex((o) => o.id === action.payload.id);
            if (index !== -1) {
                state[index].count += 1;
            } else {
                state.push({ ...action.payload, count: 1 });
            }
            return [...state];

        case 'DECREMENT_PRODUCT':
            const idx = state.findIndex((o) => o.id === action.payload.id);
            if (idx !== -1) {
                if (state[idx].count === 1) {
                    state = state.filter((o) => o.id !== action.payload.id);
                } else {
                    state[idx].count -= 1;
                }
            }
            return [...state];

        case 'REMOVE_PRODUCT':
            state = state.filter((o) => o.id !== action.payload.id);
            return [...state];

        default:
            return [...state];
    }


}