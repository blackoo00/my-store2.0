import React from 'react';
import { Link } from 'react-router';
import styles from './style.scss'
import CSSModules from 'react-css-modules';

// export const FormList = ({value,icon,href,query}) =>(
// 	<Link to={{pathname:href,query:{info:query}}} className="weui_cell" >
// 		<div className="weui_cell_hd">
// 			<span className={"order-icons icon-"+icon}></span>
// 		</div>
// 		<div className="weui_cell_bd weui_cell_primary">
// 			<p>{value}</p>
// 		</div>
// 		<div className="weui_cell_ft"></div>
// 	</Link>
// )


const CommonHeader = ({value,back,pathname}) => (
    <div styleName="header">
        <Link to={{pathname:pathname}}>
            <span styleName={back ? "back" : ""}></span>
        </Link>
        <span>{value}</span>
    </div>
)
export default CSSModules(CommonHeader,styles)

