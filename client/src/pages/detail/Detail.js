import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav, Loading } from '../../components';
import styles from './Detail.module.css';

const Detail = () => {

  const { idPais } = useParams();
  const [country, setCountry] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/countries/${idPais}`)
    .then((response) => response.json())
    .then((data) => {
      setCountry(data)
    })
  }, [idPais]);
  //TODO dar formato de número con comas por millares

  return (
    <>
      <Nav />
      <div className={styles.container} >
        {!country ? <Loading /> : (
          <>
            <img 
              src={country.image} 
              alt={country.name} 
              className={styles.flag}
            />
            <div className={styles.card}>
              <h2 className={styles.title}>
                {country.name}
              </h2>
              <div className={styles.subcontainer}>
                <div className={styles.division}>
                  <h3 className={styles.label}>
                    id:
                  </h3>
                  <h3 className={styles.text}>
                    {country.id}
                  </h3>
                </div>
                <div className={styles.division}>
                  <h3 className={styles.label}>
                    Continent:
                  </h3>
                  <h3 className={styles.text}>
                    { country.continent?.replace(/^\s*{?\s*"?(.*?)"?\s*}?\s*$/, '$1')}
                  </h3>
                </div>
              
                {country.capital && 
                  <div className={styles.division}>
                    <h3 className={styles.label}>
                      Capital:
                    </h3>
                    <h3 className={styles.text}> 
                      {country.capital?.replace(/^\s*{?\s*"?(.*?)"?\s*}?\s*$/, '$1') }
                    </h3> 
                  </div> 
                }
                {country.subregion && 
                  <div className={styles.division}>
                    <h3 className={styles.label}>
                      Subregion:
                    </h3>
                    <h3 className={styles.text}>
                      {country.subregion}
                    </h3>
                  </div>
                }
                {country.area &&  
                  <div className={styles.division}>
                    <h3 className={styles.label}>
                      Area:
                    </h3>
                    <h3 className={styles.text}>
                      {country.area}
                    </h3>
                  </div>
                }
                <div className={styles.division}>
                  <h3 className={styles.label}>
                    Population: 
                  </h3>
                  <h3 className={styles.text}>
                    {country.population}
                  </h3>
                </div>
              </div>        
            </div>
          </>
        )}  
      </div>
     
        
    </>
  )
};

export default Detail;