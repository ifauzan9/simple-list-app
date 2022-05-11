import styles from './Navbar.module.css';
import PropTypes from 'prop-types';
import shoppingIcon from '../../assets/shopping-icon.svg';

const Navbar = () => {
    return(
        <div className={styles.navbarWrap}>
            <img src={shoppingIcon} className={styles.navbarIcon} alt="shopping icon" />
            <h1 className={styles.navbarTitle}>shopping list</h1>
        </div>
    )
}

export default Navbar;