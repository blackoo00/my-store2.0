import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/';

class App extends Component{
    componentWillMount(){
        const {init} = this.props;
        init();
    }
    render(){
        let {qrcode} = this.props;
        return(
            <div>
                <img src={qrcode} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    qrcode:state.my.info.my_qrcode
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
