/**
 * Created by pusti on 25.08.2017.
 */
const sort = (order,field) => ({
    type: 'SORT_FILMS',
    payload: {order,field},
});

export default sort;