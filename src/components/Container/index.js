import styles from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container;