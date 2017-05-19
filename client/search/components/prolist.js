import React from 'react';
import styles from '../sass/_search.scss';
import CSSModules from 'react-css-modules';
/*
	*参数说明
	*handleSearchPro：onChange促发搜索事件
	*handleCancelSearch：取消搜索（包括关键词清空和点击取消或叉叉按钮）
	*refs：input按钮（获取数据用）
	*searchText：搜索框内容
 */

const ProList = ({...rest}) => (
	<div id="search-wrap">
		<section>
			<div styleName="search-list">
				<ul styleName="list-view">
					<div styleName="page-container" id="search-prods">
						{rest.children}
					</div>
				</ul>
			</div>
		</section>
	</div>
)

export default CSSModules(ProList,styles)

