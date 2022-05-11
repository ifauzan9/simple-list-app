import styles from './ItemWrap.module.css';
import PropTypes from 'prop-types';
import Items from '../Items';

const ItemWrap = ({items, handleChange}) => {
    
    return(
        <div className={styles.itemWrap}>
            {
                items.map((item, index, arr) => {
                    return(
                        <Items 
                            key={index}
                            index={index}
                            title={item.title}
                            count={item.count}
                            handleChange={handleChange}                        
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemWrap;