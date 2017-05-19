import * as types from '../../common/constants/ActionTypes';
import shop from '../../shared/shop';

const indexInitDip = (data) => ({
    type:types.INDEX_INIT,
    data:data
})

export const indexInit = () => dispatch => {
    shop.indexInit(data => {
        dispatch(indexInitDip(data));
    })
}
