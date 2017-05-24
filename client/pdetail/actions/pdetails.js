import shop from '../../shared/shop';
import * as types from '../../common/constants/ActionTypes';
import {browserHistory} from 'react-router';
import {getAllProducts} from '../../cart/actions/carts';

//获取商品详情
const proDetailsInitDip = (pdetails) =>({
	type:types.PRODETAILS_INIT,
	pdetails:pdetails
})

export const proDetailInit = (pid) => dispatch => {
    // return dispatch => {
    //     utils.ajax({
    //         url: types.STORE + 'getProDetail',
    //         type: 'get',
    //         data:{pid:pid}
    //     }).then(res => {
    //         alert(res.data.pro.name);
    //         dispatch(proDetailsInitDip(res.data))
    //     })
    // }
	shop.getProDetails(pdetails => {
		dispatch(proDetailsInitDip(pdetails))
	},pid);
}

//收藏商品
const handleCollectionDip = () => ({
	type:types.PRODUCT_COLLECTION,
})

export const handleCollection = (pid) => dispatch => {
    // return dispatch => {
    //     utils.ajax({
    //         url: types.STORE + 'collection',
    //         type: 'get',
    //         data:{pid:pid}
    //     }).then(res => {
    //         dispatch(handleCollectionDip())
    //     })
    // }
	shop.collectionProduct(pid,()=>{
		dispatch(handleCollectionDip())
	});
}
//显示规格
export const handleShowPra = (arg) => ({
	type:types.SHOW_PRO_SPEC,
	arg:arg
})
//隐藏规格
export const handleHidePra = () => ({
	type:types.HIDE_PRO_SPEC,
})
//选择规格
export const chooseAttr = (spec_key,attr_key) => ({
	type:types.CHOOSE_ATTR,
	spec_key:spec_key,
	attr_key:attr_key,
})
//增加数量
export const addNumber = () => ({
	type:types.ADD_CART_PRODUCT_NUMBER,
})
//减少数量
export const delNumber = () => ({
	type:types.DEL_CART_PRODUCT_NUMBER,
})
//加入购物车
export const addCart = (arg,pid,did,num,dprice) =>{
	if(Object.keys(dprice).length > 0){
		if(isNaN(pid) || did == 0 || num <= 0){
			alert('请选择属性');
			return;
		}
	}else if(num <= 0){
		alert('请选择数量');
		return;
	}
    // return dispatch => {
    //     utils.ajax({
    //         url: types.STORE + 'addProductToCart',
    //         type: 'get',
    //         data:{pid:pid,did:did,num:num}
    //     }).then(res => {
    //          if(arg){
    //              dispatch(handleHidePra());
    //              getAllProducts(true);//刷新下购物车
    //              browserHistory.push({pathname:"/cart"});
    //          }else{
    //              alert('加入成功');
    //              dispatch(handleHidePra());
    //          }
    //     })
    // }
    return dispatch => {
    	shop.addCart(pid,did,num,()=>{
    		if(arg){
    			dispatch(handleHidePra());
    			getAllProducts(true);//刷新下购物车
    			browserHistory.push({pathname:"/cart"});
    		}else{
    			alert('加入成功');
    			dispatch(handleHidePra());
    		}
    	})
    }
}
