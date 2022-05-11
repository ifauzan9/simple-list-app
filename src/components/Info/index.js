import styles from './Info.module.css';
import PropTypes from 'prop-types';

const Info = ({totalList, totalCounts, handleDeleteAll}) => {    
    return(
        <div className={styles.infoWrap}>
            <p className={styles.totalList}>Total Lists : {totalList}</p>
            <p className={styles.totalCount}>Total Counts : {totalCounts}</p>
            <button className={styles.deleteAll} onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}

export default Info;