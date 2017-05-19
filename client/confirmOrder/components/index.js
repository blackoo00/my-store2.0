import React from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import WeUI from 'react-weui';
const {Cells,CellsTitle} = WeUI;

const Settle = ({children}) => (
	<div>
		<div>
			<CellsTitle>商品描述</CellsTitle>
			<Cells style={{marginTop:0,marginBottom:'100px'}}>
				{children}
			</Cells>
		</div>
	</div>
)

export default Settle;
