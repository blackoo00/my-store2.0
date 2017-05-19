import React from 'react';
import styles from './style.css';
// import CSSModules from 'react-css-modules';

class ScrollBox extends React.Component{
    render(){
        let {children} = this.props;
        return(
            <div className={styles.scrollBoxWrao}>
                {children}
            </div>
        )
    }
}


export default ScrollBox
