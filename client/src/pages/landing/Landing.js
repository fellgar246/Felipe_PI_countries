import styles from "./Landing.module.css";
import { NavLink } from 'react-router-dom';

const Landing = () => {

  return (
    <div className={styles.section}>
      <div className={styles.bannerVideo} >
        <video className={styles.video} src="./mapsVideo.mp4" autoPlay muted loop ></video>
      </div>
      <div className={styles.container}>
        <div className={styles.bannerText}>
            <h2 className={styles.title}>Henry Countries</h2>
            <NavLink to={"/home"}>
              <span className={styles.button}>INGRESA</span>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Landing;