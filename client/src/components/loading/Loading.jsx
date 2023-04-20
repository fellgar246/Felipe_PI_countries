import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.container} >
      <div className={styles.subcontainer}>
        <div className={styles.text}>Loading</div>
        <div className={styles.ring}></div>
      </div>
    
    </div>
  )
}

export default Loading