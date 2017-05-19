import React from 'react';
import {Link} from 'react-router';
import WeUI from 'react-weui';
const {CellsTitle,Cells} = WeUI;
import styles from '../sass/style.scss';
import CSSModules from 'react-css-modules';

const AddList = ({children}) => (
	<div>
        <CellsTitle>选择代收货地址</CellsTitle>
		<Cells>
			{children}
		</Cells>
		<Link to="addAddress">
			<button styleName="actionBtn">新增收货地址</button>
		</Link>
	</div>
)

export default CSSModules(AddList,styles)
