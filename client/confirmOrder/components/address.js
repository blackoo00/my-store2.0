import React from 'react';
import WeUI from 'react-weui';
const {Cells,CellHeader,Cell,CellBody,CellFooter,CellsTitle} = WeUI;
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';

const App = ({address}) => (
    <Cells styleName="order-address">
        <Cell href="address" access>
            <CellHeader>
                <div className="icon-dizhi iconfont" style={{fontSize:'25px',marginRight:'5px'}}></div>
            </CellHeader>
            <CellBody>
                <p>收货人:{address.consignee}({address.tel})</p>
                <p>
                    {address.address}
                </p>
            </CellBody>
            <CellFooter/>
        </Cell>
    </Cells>
)

export default CSSModules(App,styles)
