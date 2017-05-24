import React, {Children, Component, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import actions from '../actions'
import styles from '../sass/Common'
import '../sass/global'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import '../sass/animation.css'

class Common extends Component {
    constructor() {
        super()
    }

    render() {
        const {children, ...props} = this.props

        return (
            <ReactCSSTransitionGroup
              component="div"
              transitionName="page"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              >
            <div key={props.pathname} className="page">
                    <Main>
                        {Children.map(children, child =>
                            cloneElement(child, {...props})
                        )}
                    </Main>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Common)
