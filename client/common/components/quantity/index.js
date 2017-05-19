import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';

const App = ({delCartProductById,addCartProductById,number}) => (
    <div styleName="order-quantity">
        <div styleName="content">
            <a styleName="minus" onClick={delCartProductById}></a>
            <input styleName="amount" type="number" value={number || ''} readOnly/>
            <a styleName="plus" onClick={addCartProductById}></a>
        </div>
    </div>
)

export default CSSModules(App,styles)
