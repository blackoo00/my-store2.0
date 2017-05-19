import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/carts';
import * as addactions from '../../address/actions/address';
import CartItem from '../components/cartitem';
import CommonHeader from '../../common/components/weui/';
import Main from '../components/index';
import Address from '../components/address';
import Settle from '../components/settle';
import Remark from '../components/remark';

let input
class SettleController extends Component{
    componentWillMount(){
        let {...rest} = this.props;
        rest.getCartsInfo();
        rest.getDefaultAddress();
    }
    render(){
        let {...rest} = this.props;
        return(
            <div>
                <CommonHeader value="下单结算" back={true} pathname={'/Cart'}/>
                <Address address={rest.address}/>
                <Main>
                    {rest.carts.products.map(cart =>{
                        if(cart && cart.choose == 1){
                            return(
                                <CartItem
                                    key = {cart.id}
                                    cart = {cart}
                                    addCartProductById = {() => rest.addCartProductById(cart.id)}
                                    delCartProductById = {() => rest.delCartProductById(cart.id,cart.number)}
                    test = {() => rest.test()}

                                />
                            )
                        }
                    })}
                    <Remark refs = {node => {input = node}}/>
                </Main>
                <Settle
                    carts = {rest.carts}
                    handleSubmitOrder = {() => rest.handleSubmitOrder()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
	carts:state.carts,
	address:state.address.defaultAdd
})
const mapDispatchToProps = (dispatch) =>({
	getCartsInfo:() => {
		dispatch(actions.getAllProducts())
	},
	addCartProductById:(cartId)=>{
		dispatch(actions.addCartProductById(cartId))
	},
	delCartProductById:(cartId,number)=>{
		dispatch(actions.delCartProductById(cartId,number))
	},
	//提交订单
	handleSubmitOrder:()=>{
		dispatch(actions.handleSubmitOrder(input.value))
	},
	//获取默认地址
	getDefaultAddress:() => {
		dispatch(addactions.getDefaultAddress())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettleController);
