import React, {Component} from 'react'
import styles from '../sass/App'
import {connect} from 'react-redux'
import * as actions from '../actions/';
import SectionMain from '../components/SectionMain'
import SwiperDom from '../../common/components/SwiperDom'
import Cat from '../components/Cat'
import Prods from '../components/Prods'
import Footer from '../../common/components/Footer';
class App extends Component {
    constructor() {
        super()
    }
    componentWillMount() {
        let {init} = this.props;
        init();
    }

    render() {
        const {actions,banlist,catlist,prolist} = this.props

        return (
            <div className={styles.app}>
                <SwiperDom list={banlist}/>
                <Cat list={catlist}/>
                <Prods list={prolist}/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    banlist:state.home.ban,
    catlist:state.home.cat,
    prolist:state.home.pro
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.indexInit())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
