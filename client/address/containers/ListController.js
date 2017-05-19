import React,{Component} from 'react';
import {connect} from 'react-redux';
import AddList from '../components/list';
import AddItem from '../components/additem';
import * as actions from '../actions/address';
import CommonHeader from '../../common/components/weui/';

class ListContainer extends Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        let {list,handleChoose} = this.props;
        return(
            <div>
                <CommonHeader value="管理收货地址" back={true} pathname={'confirmOrder'}/>
                <AddList>
                    {list.map((item,index)=>(
                        <AddItem
                            key = {index}
                            elem = {item}
                            handleChoose = {()=>{handleChoose(item.id)}}
                        />
                    ))}
                </AddList>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	list:state.address.list
})

const mapDispatchToProps = (dispatch) =>({
	init:() => {
		dispatch(actions.getMyAddresses())
	},
	handleChoose:(aid) => {
		dispatch(actions.setDefaultAddress(aid))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListContainer)
