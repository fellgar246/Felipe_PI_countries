import styles from "./Landing.module.css";
import { NavLink } from 'react-router-dom';

const Landing = () => {

  //TODO: agregar al video la class active y poner la opacidad 1

  return (
    <div className={styles.section}>
      <div className={styles.bannerVideo} >
        <video className={styles.video} src="./img/video4.mp4" autoPlay muted loop ></video>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.bannerText}>
              <h2 className={styles.title}>Henry Places</h2>
              <NavLink to={"/home"}>
                <button >INGRESA</button>
              </NavLink>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;