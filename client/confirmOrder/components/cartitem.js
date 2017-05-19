import React from 'react';
import Quantity from '../../common/components/quantity/';
import WeUI from 'react-weui';
const {Cells,CellHeader,Cell,CellBody,CellFooter,CellsTitle} = WeUI;
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';

const CartItem = ({cart,addCartProductById,delCartProductById}) => (
    <Cells style={{marginTop:0}} styleName="order-details">
        <Cell>
            <CellHeader>
                <img styleName="product-logo" src={cart.goods_logo} alt="" width="20"/>
            </CellHeader>
            <CellBody>
                <p styleName="order-product-name">{cart.goods_name}</p>
                <p styleName="sku-info">{cart.goods_attr}</p>
            </CellBody>
            <CellFooter>
                <p styleName="main-price">￥{cart.goods_price}</p>
                <p>X{cart.number}</p>
            </CellFooter>
        </Cell>
        <Cell>
            <CellBody>
                购买数量
            </CellBody>
            <CellFooter>
                <Quantity
                addCartProductById = {addCartProductById}
                delCartProductById = {delCartProductById}
                number = {cart.number}
            />
            </CellFooter>
        </Cell>
    </Cells>

)

export default CSSModules(CartItem,styles);
