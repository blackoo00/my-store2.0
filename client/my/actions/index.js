import * as types from '../../common/constants/ActionTypes';
import shop from '../../shared/shop.js';

const myInfoInitDip = (data) => ({
    type:types.MY_INIT,
    data:data
})

export const myInfoInit = () => dispatch =>{
    shop.myInfoInit(info => {
        dispatch(myInfoInitDip(info))
    })
}
