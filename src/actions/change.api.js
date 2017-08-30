/**
 * Created by pusti on 23.08.2017.
 */
import IndexApi from '../api/IndexApi';

const Api = new IndexApi();

const change = (API) =>
    (method, params) =>
        dispatch =>
            API[method].call(API, params)
                .then( response => response.json())
                .catch(error => {
                    console.log(error);
                    dispatch({
                        type: "API_ERROR",
                        error,
                    });
                });

export const authenticate = (credentials) => change(Api)('authenticate',credentials);
export const addFilm = (film) => change(Api)('addFilm',film);
export const deleteFilm = (id) => change(Api)('deleteFilm',id);