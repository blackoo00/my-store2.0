import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/pdetails';
import '../sass/style.scss';
import Pdetail from '../components/pdetail';
import Spec from './SpectController';
import ScrollBox from '../../common/components/scroll-box/'

class PdetailsContainer extends Component{
    constructor() {
        super()
    }
	componentWillMount(){
		let {init,pdetails} = this.props;
        // let pid = this.props.location.query.id;
		let pid = this.props.params.id;
        init(pid)
	}
	componentWillUnmount(){
		let {handleHidePra} = this.props;
		handleHidePra();
	}
	render(){
		let {pdetails,handleCollection,handleShowPra,handleHidePra} = this.props;
		let pro = pdetails.pro;
		return(
            <div>
                <ScrollBox
                    footerName = {'.bottom_bar'}
                >
        			<Pdetail
        				pdetails = {pdetails}
        				handleCollection = {()=>{handleCollection(pro.id)}}
        				addToCart = {()=>{handleShowPra('')}}
        				buyNow = {()=>{handleShowPra('buy')}}
        			/>
                </ScrollBox>
                <Spec/>
            </div>
		)
	}
}

const mapStatetoProps = (state) =>({
	pdetails:state.pdetails,
})

const mapDispatchToProps = (dispatch) => ({
	init:(pid) => {
		dispatch(actions.proDetailInit(pid))
	},
	//收藏
	handleCollection:(pid) => {
		dispatch(actions.handleCollection(pid))
	},
	//显示规格选项
	handleShowPra:(arg) => {
		dispatch(actions.handleShowPra(arg))
	},
	//关闭商品规格选项
	handleHidePra:() => {
		dispatch(actions.handleHidePra())
	},
})

const getQueryString = () => {

}

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(PdetailsContainer)
