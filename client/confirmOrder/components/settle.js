import React from 'react';
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';

const App = ({carts,handleSubmitOrder}) => (
    <div styleName="order-submitOrder">
        <div styleName="mui-flex">
            <div styleName="realPay">
                <div>
                    <span >共</span>
                    <span styleName="count" >{carts.totalNum}</span>
                    <span >件，总金额</span>
                    <span styleName="price">
                        <span>￥</span>
                        <span>{carts.totalFee}</span>
                    </span>
                </div>
            </div>
            <div styleName="action">
                <div styleName="mui-flex" onClick={handleSubmitOrder}>
                    <span title="提交订单">提交订单</span>
                </div>
            </div>
        </div>
    </div>
)

export default CSSModules(App,styles)
