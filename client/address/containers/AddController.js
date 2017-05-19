import React,{Component} from 'react';
import {connect} from 'react-redux';
import AddAddress from '../components/add';
import * as actions from '../actions/address';
import CommonHeader from '../../common/components/weui/';

let name,tel,address;

class AddContainer extends Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        let {handleAddAddress} = this.props;
        return(
            <div>
                <CommonHeader value="管理收货地址" back={true} pathname="address"/>
                <AddAddress
                    name = {node => {name = node}}
                    tel = {node => {tel = node}}
                    address = {node => {address = node}}
                    handleAddAddress={()=>{handleAddAddress()}}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list:state.address.list
})

const mapDispatchTpProps = (dispatch) => ({
    init:() => {
        dispatch(actions.getMyAddresses())
    },
    handleAddAddress:()=>{
        if(name.value != null && tel.value!= null && address.value!= null){
            dispatch(actions.addAddress(name.value,tel.value,address.value))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchTpProps
)(AddContainer)

