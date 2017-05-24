import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/search';
import ProList from '../components/prolist';
import ProItem from '../components/item';
import {Link,browserHistory} from 'react-router';
import WeUI from 'react-weui';
const {SearchBar} = WeUI;

class SearchContainer extends React.Component{
    componentWillMount(){
        let {...rest} = this.props;
        rest.init();
    }
    componentDidMount(){
        let {...rest} = this.props;
        //延时是为了滚动位置
        setTimeout(() => {
            rest.handleWindowScroll(() =>{rest.loadMorePro()});
        },200)
    }
	componentWillUnmount(){
		let {...rest} = this.props;
        if(typeof(window) != "undefined"){
		    window.removeEventListener('scroll',rest.loadMorePro());
        }
	}
	render(){
		let {...rest} = this.props;
		return(
            <div>
                <SearchBar
                    onChange={rest.handleSearchPro.bind(this)}
                    placeholder="输入商品关键"
                    lang={{
                        cancel: '取消'
                    }}
                />
    			<ProList>
    				{rest.list.map(item => {
    					if(item.name.includes(rest.searchText)){
    						return(
    							<ProItem
    								key = {item.id}
    								elem = {item}
    							/>
    						)
    					}
    				}
    				)}
    			</ProList>
            </div>
		)
	}
}

const mapStateToProps = (state) => ({
	list:state.search.list,
	searchText:state.search.searchText,
	count:state.search.count,
	bindscroll:state.search.bindscroll,
})

const mapDispatchToProps = (dispatch) => ({
	//初始化
	init:() => {
		dispatch(actions.getProList())
	},
	//搜索
	handleSearchPro:(keys) => {
		dispatch(actions.searchPro(keys))
	},
	//取消搜索
	handleCancelSearch:() => {
		dispatch(actions.cancelSearch())
	},
	//滚动加载
	handleWindowScroll:(cb) => {
	    window.addEventListener('scroll',cb)
	},
	loadMorePro:() => {
		if((document.body.scrollTop + document.body.clientHeight) >= document.body.scrollHeight){
			// let count = $('.page-container li').length;
            if(document.getElementById("search-prods") != null){
                let count = document.getElementById("search-prods").children.length
                setTimeout(()=>{
    			    dispatch(actions.searchGetMorePro(count,4))
                },200)
            }
		}
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchContainer)

