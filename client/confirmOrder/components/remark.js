import React from 'react';
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';
import WeUI from 'react-weui';
const {Cell,CellBody,CellFooter} = WeUI

const App = ({refs}) => (
    <Cell>
        <CellBody>
            留言
        </CellBody>
        <CellFooter styleName="order-remark">
            <input ref={refs} placeholder="选填:你填一个试试？"/>
        </CellFooter>
    </Cell>
)

export default CSSModules(App,styles)
