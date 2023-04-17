import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Landing.module.css";


const Landing = () => {
      
  const [currentState, setCurrentState] = useState(0);

  useEffect(() =>{
    const timer = setTimeout(() => {
      if(currentState === 2){
        setCurrentState(0)
      }else {
        setCurrentState(currentState+1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])

  const imageSlide = [
      {url: './japan.jpg'}, 
      {url: './mexico.jpg'}, 
      {url: './mountain.jpg'}, 
  ];

  const bgImageStyle = {
      backgroundImage: `url(${imageSlide[currentState].url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100%',
      color: 'white'
  };

  return (
    <div className={styles.section}>
 
      <div style={bgImageStyle}>
        H <div className={styles.container}>
        <div className={styles.bannerText}>
            <h2 className={styles.title}>Henry Countries</h2>
            <NavLink to={"/home"}>
              <span className={styles.button}>INGRESA</span>
            </NavLink>
        </div>
      </div>
      </div>

     
      <div>

      </div>
    </div>
  )
}

export default Landing;