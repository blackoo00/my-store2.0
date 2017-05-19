import React from 'react';
import styles from '../sass/_parameter.scss'

const Paramenter = ({pdetails,children,handleHidePra,addNumber,delNumber,clickSubmit}) => (
    <div className={styles.productParameterWrapper}>
        <div className={styles.summary}>
            <div className={styles.img}>
                <img src={pdetails.pro.logo} alt=""/>
            </div>
            <div className={styles.main}>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>¥{pdetails.price > 0 ? pdetails.price : pdetails.pro.price}
                    </span>
                </div>
                <div className={styles.stockControl}>
                    <span className={styles.stock}>
                        <label className={styles.label}>库存:{pdetails.pro.number}件</label>
                    </span>
                    <span className={styles.limitTip}></span>
                </div>
                <div key="choose_attr" className={styles.skuDtips}>
                    已选择:{pdetails.chooseAttr}
                </div>
            </div>
            <a className={styles.sback} onClick={handleHidePra}></a>
        </div>
        <div className={styles.body}>
            <section className={styles.sDecision}>
                <div className={styles.skuControl}>
                    <ul className={styles.muiSku}>
                        {children}
                    </ul>
                </div>
                <div className={styles.number}>
                    <h2>数量</h2>
                    <div className={styles.content}>
                        <div className={styles.numberControl}>
                            <div className={styles.muiNumber}>
                                <button type="button" className={styles.decrease}  onClick={delNumber}>-</button>
                                <input type="number" readOnly className={styles.num} value={pdetails.number} min='1' max='2' step="" name="quantity"/>
                                <button type="button" className={styles.increase} onClick={addNumber}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className={styles.option}>
            <button className={styles.ok} onClick={clickSubmit}>确定</button>
            <button className={styles.cart} style={{display: 'none'}}>加入购物车</button>
            <button className={styles.buy} style={{display: 'none'}}>立即购买</button>
        </div>
    </div>
)
export default Paramenter;
