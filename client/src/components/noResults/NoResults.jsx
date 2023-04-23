import styles from './NoResults.module.css';
import notFoundIcon from '../../assets/icons/nothing-found-sad.png';


const NoResults = () => {
  return (
    <div className={styles.container} >
      <div className={styles.subcontainer}>
        <h3 className={styles.title}>Ups! </h3>
        <h3 className={styles.title}>No results</h3>
        <p className={styles.subtitle}>Search for another country or use other filter</p>
       
      </div>
      <img 
            src={notFoundIcon}
            alt='notFoundIcon'
            className={styles.notFoundIcon}
        />
    </div>
  )
}

export default NoResults;