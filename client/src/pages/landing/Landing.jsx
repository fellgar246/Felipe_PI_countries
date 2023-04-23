import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Landing.module.css";


const Landing = () => {
      
  const [currentState, setCurrentState] = useState(0);

  useEffect(() =>{
    const timer = setTimeout(() => {
      if(currentState === 5){
        setCurrentState(0)
      }else {
        setCurrentState(currentState+1)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [currentState])

  const imageSlide = [
      {url: './images/man-visiting.jpg'}, 
      {url: './images/mexico.jpg'}, 
      {url: './images/mountain.jpg'}, 
      {url: './images/machupicchu.jpg'}, 
      {url: './images/opera-house.jpg'}, 
      {url: './images/chinese-lanterns.jpg'}, 
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
        <div className={styles.container}>
          <div className={styles.bannerText}>
            <h2 className={styles.title}>Henry Countries</h2>
            <h3 className={styles.subtitle}>
              Search for a country and create an interesting activity
            </h3>
            <NavLink to={"/home"}>
              <span className={styles.button}>INGRESA</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;