/**
 * Created by pusti on 30.08.2017.
 */
const message = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                ...state,
                text: action.message
            };
        default:
            return state;
    }
};

export default message;