import React from 'react';
import WeUI from 'react-weui';
const {Cells,CellBody,CellFooter,Cell} = WeUI;
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';

const AddAddress = ({handleAddAddress,name,tel,address}) =>(
	<Cells>
        <Cell access>
            <CellBody>
                <input className="weui-input" ref={name} type="text" placeholder="姓名"/>
            </CellBody>
            <CellFooter/>
        </Cell>
        <Cell access>
            <CellBody>
                <input className="weui-input" ref={tel} type="text" placeholder="电话"/>
            </CellBody>
            <CellFooter/>
        </Cell>
        <Cell access>
            <CellBody>
                <input className="weui-input" ref={address} type="text" placeholder="详细地址"/>
            </CellBody>
            <CellFooter/>
        </Cell>
		<button styleName="actionBtn" onClick={handleAddAddress}>保存地址</button>
	</Cells>
)

export default CSSModules(AddAddress,styles)
