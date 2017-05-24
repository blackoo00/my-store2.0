var React = require('react');
import { Link } from 'react-router';
import styles from '../sass/Prods.scss';

const Prods = ({list}) => (
    <div className={styles.indexItem}>
        <div style={{paddingBottom:'70px'}}>
            {list.map(item => (
                <Link key={item.id} to={'/pdetail/'+item.id}>
                    <div className={styles.indexProItem}>
                        <img src={item.logo}/>
                        <div className={styles.indexProNameItem}>
                            <p className={styles.indexProName}>{item.name}</p>
                        </div>

                        <p className={styles.indexProPrice}>￥{item.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
)

export default Prods
