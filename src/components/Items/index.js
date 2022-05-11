import styles from './Items.module.css';
import minusIcon from '../../assets/minus-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import classnames from 'classnames';

const Items = ({title, count, handleChange, index}) => {
    
    return(
        <div className={classnames(styles.itemContainer, {
            [styles.noLastItem]: true
        })}>
            <p className={styles.itemTitle}>{title}</p>
            <div className={styles.itemToggle}>
                <input className={styles.value} type="text" value={count} readOnly/>
                <button className={styles.buttonItem} onClick={(e) => handleChange(e, index)}>
                    <img className={styles.toggleIcon} name="minus" src={minusIcon} alt="" />
                </button>
                <button className={styles.buttonItem} onClick={(e) => handleChange(e, index)}>
                    <img className={styles.toggleIcon} name="plus" src={plusIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Items;