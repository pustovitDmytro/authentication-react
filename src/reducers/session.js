/**
 * Created by pusti on 30.08.2017.
 */
const session = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default session;