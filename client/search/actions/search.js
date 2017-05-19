import * as types from '../../common/constants/ActionTypes';
import shop from '../../shared/shop';

//获取商品列表
const getProListDip = (products) =>({
	type:types.GET_PRODUCTS,
	products:products
})

export const getProList = () => dispatch =>{
	shop.getProList(products=>{
		dispatch(getProListDip(products))
	})
}

//清空搜索内容
export const cancelSearch = () =>({
	type:types.CANCEL_SEARCH
})

//搜索
export const searchPro = (keys) => ({
	type:types.SEARCH_PRO,
	keys:keys
})
//滚动加载
const searchGetMoreProDip = (products) => ({
	type:types.SEARCH_SCROLL_GET_MORE_PRO,
	products:products
})

export const searchGetMorePro = (count,load_num) => dispatch =>{
	shop.getMorePro(products => {
        dispatch(searchGetMoreProDip(products))
    },count,load_num)
}
