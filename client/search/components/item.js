import React from 'react';
import {Link} from 'react-router';
import styles from '../sass/_search.scss';
import CSSModules from 'react-css-modules';

const proItem = ({elem,key}) => (
	<li>
        <Link to={"pdetail/" + elem.id}>
            <div styleName="list-item">
        		<div styleName="p">
        			<img src={elem.logo}/>
        		</div>
        		<div styleName="d">
        			<h3 styleName="d-title">{elem.name}</h3>
        			<p styleName="d-price">
                        <em styleName="h">
                            <span>¥</span>
        					<span>{elem.price}</span>
                        </em>
                        <del>
                            <span>¥</span>
        					<span>{elem.market_price}</span>
                        </del>
        			</p>
        			<div styleName="d-main">
        				<p>{(elem.mail_price > 0 ? elem.mail_price : '免运费')}</p>
        				<p styleName="d-num">
        					<span>{elem.sales_count}</span>
        					人付款
        				</p>
        				<p>台州</p>
        			</div>
        		</div>
            </div>
        </Link>
	</li>
)

export default CSSModules(proItem,styles)
