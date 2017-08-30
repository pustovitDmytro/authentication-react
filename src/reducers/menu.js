/**
 * Created by pusti on 30.08.2017.
 */
const menu = (state = {}, action) => {
    switch (action.type) {
        case 'GET_MENU':
            return {
                ...state,
                array: action.payload
            };
        case 'API_ERROR':
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default menu;