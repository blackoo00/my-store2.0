import React from 'react';
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';
import WeUI from 'react-weui';
const {Cell,CellBody,CellFooter} = WeUI;

const AddItem = ({elem,handleChoose}) => (
    <Cell styleName={(elem.choose == 1 ? "active" : "")} onClick={handleChoose}>
        <CellBody>
            <p styleName="address-name">收货人:{elem.consignee}</p>
            <p styleName="address-con">收货地址:{elem.address}</p>
        </CellBody>
        <CellFooter styleName="address-name">
            {elem.tel}<i className="iconfont icon-check" style={{color:'#fff',marginLeft:'5px'}}></i>
        </CellFooter>
    </Cell>
)

export default CSSModules(AddItem,styles)
