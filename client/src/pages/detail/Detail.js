import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {

  const { idPais } = useParams();
  const [country, setCountry] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/countries/${idPais}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setCountry(data)
    })
  }, [idPais]);


  // <img src={element.country.imageFlag} alt={element.country.name} />
  // <h3>id:{element.country.id}</h3>
  // <h3>Continent:{element.country.continent}</h3>
  // <h3>Subregion:{element.country.subregion}</h3>
  // <h3>Area: {element.country.area}</h3>
  // <h3>Population: {element.country.pupulation}</h3>


  return (
    <>
 
      <h2>Country Name</h2>
      <h2>{country.name}</h2>
    
    </>
  )
};

export default Detail;