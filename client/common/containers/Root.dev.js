import React, {Component} from 'react'
// import DevTools from './DevTools'
import Common from './Common'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../sass/animation.css'

class Root extends Component {
    constructor() {
        super()
        this.state = {isMounted: false}
    }

    componentDidMount() {
        this.setState({isMounted: true})
        console.log('Redux Devtools is now available. Press key "ctrl-h" to toggleVisibility. Press key "ctrl-w" to changePosition.')
    }

    render() {
        const {isMounted} = this.state,
            {children} = this.props
        return (
            <ReactCSSTransitionGroup
              component="div"
              transitionName="page"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              >
            <div key={this.props.location.pathname} className="page">
                <Common>{children}</Common>
                {isMounted}
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default Root
