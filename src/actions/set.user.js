/**
 * Created by pusti on 31.08.2017.
 */
const set = (user,token) => dispatch=> {
    dispatch({
        type: 'SET_USER',
        user,
    });
    sessionStorage.setItem('jwt', token);
};
export default set;