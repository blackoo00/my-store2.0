import React from 'react';
import SwiperDom from '../../common/components/SwiperDom';
import styles from '../sass/style.scss';

const Pdetail = ({pdetails,handleCollection,addToCart,buyNow}) => {
    return(
    	<div className={styles.proDetailWrapper}>
    		<div className={styles.proDetail}>
    			<div className={styles.proBanner}>
    				<SwiperDom list = {pdetails.ban}/>
    			</div>
    			<div className={styles.pageModuleItem}>
    				<div className={styles.proName}>{pdetails.pro.name}</div>
    				<div className={styles.proPrice}>￥{pdetails.pro.price}</div>
    			</div>
    			<div className={styles.pageModuleItem}>
    				<div dangerouslySetInnerHTML={{__html: pdetails.pro.desc}} />
    			</div>
    		</div>
    		<div className={styles.bottomBar}>
                <div className={styles.bottomBarIcon}>客服</div>
    			<div className={pdetails.col ?styles.active:styles.collection} onClick={handleCollection}>收藏</div>
    			<div className={styles.cart} onClick={addToCart}>加入购物车</div>
    			<div className={styles.buy} onClick={buyNow}>立即购买</div>
    		</div>
    	</div>
    )
}

export default Pdetail;
