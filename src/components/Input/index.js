import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({handleNewInput, addNewItem}) => {
    return(
        <div className={styles.inputWrap}>
            <input onChange={(e) => handleNewInput(e)} type="text" className={styles.inputBox} placeholder="list" />
            <button onClick={() => addNewItem()} className={styles.inputBtn}>add</button>
        </div>
    )
}

Input.propTypes = {
    handleNewInput: PropTypes.func,
    addNewItem: PropTypes.func
}

export default Input;