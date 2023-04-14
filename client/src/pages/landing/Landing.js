import styles from "./Landing.module.css";
import { NavLink } from 'react-router-dom';

const Landing = () => {

  //TODO: agregar al video la class active y poner la opacidad 1
  //TODO: Quitar font de css

  return (
    <div className={styles.section}>
      <div className={styles.bannerVideo} >
        {/* <video className={styles.video} src="./img/video1.mp4" autoPlay muted loop ></video>
        <video className={styles.video} src="./img/video2.mp4" autoPlay muted loop ></video>
        <video className={styles.video} src="./img/video3.mp4" autoPlay muted loop ></video> */}
        <video className={styles.video} src="./img/video4.mp4" autoPlay muted loop ></video>
      </div>
      <div className={styles.container}>
        <header className={styles.header}>
          {/* <a href="#" className={styles.logo} >World</a> */}
          <ul className={styles.lista}>
            <li className={styles.lista_elemento}>
              {/* <a href="#" className={styles.menu} >Home</a>
              <a href="#" className={styles.menu} >Form</a> */}
            </li>
          </ul>
          <span className={styles.menuIcon}></span>
        </header>
        <div className={styles.content}>
          <div className={styles.bannerText}>
              <h2 className={styles.title}>Henry Places</h2>
              <NavLink to={"/home"}>
                <button >INGRESA</button>
              </NavLink>
              <p className={styles.text}>
                Lorem............
              </p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;