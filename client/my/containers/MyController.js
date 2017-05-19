import React,{Component} from 'react';
import My from '../components/my';
import * as actions from '../actions/';
import {connect} from 'react-redux';

class App extends Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        let {info} = this.props;
        return(
            <div>
                <My
                    info = {info}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    info:state.my.info
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.myInfoInit())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
