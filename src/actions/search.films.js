/**
 * Created by pusti on 25.08.2017.
 */
const search = (query,field) => ({
    type: 'SEARCH_FILMS',
    payload: {query,field},
});

export default search;