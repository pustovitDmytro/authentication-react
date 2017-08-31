/**
 * Created by pusti on 31.08.2017.
 */
export const setUser = (user) => dispatch =>
    new Promise((resolve, reject)=>{
        dispatch({
            type: 'SET_USER',
            user,
        });
        resolve(user);
    });