var React = require('react');
import CSSModules from 'react-css-modules';
import styles from '../sass/Cat';

const Cat = ({list}) => (
    <div className={styles.catWrap}>
        {list.map(item => (
            <div key={item.id} className={styles.catItem}>
                <img src={item.icon}/>
                <p className={styles.catName}>{item.name}</p>
            </div>
        ))}
    </div>
)

export default CSSModules(Cat, styles)
