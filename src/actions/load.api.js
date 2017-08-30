/**
 * Created by pusti on 23.08.2017.
 */
import IndexApi from '../api/IndexApi';

const Api = new IndexApi();

const load = (API) =>
    (method, type, params) =>
        dispatch => {
            const token = sessionStorage.getItem('jwt')
            return API[method].call(API, {token})
                .then(response => response.json())
                .then(payload =>
                    dispatch({
                        type,
                        payload
                    })
                )
                .catch(error => {
                    console.log(error);
                    dispatch({
                        type,
                        payload: [],
                    });
                    dispatch({
                        type: "API_ERROR",
                        error,
                    });
                });
        }
export const getMenu = () => load(Api)('getMenu', 'GET_MENU');