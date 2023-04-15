import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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


  return (
    <>
      <h2>Country Name</h2>
      <h2>{country.name}</h2>
      <img src={country.imageFlag} alt={country.name} />
      <h3>id:{country.id}</h3>
      <h3>Continent:{ country.continent?.replace(/^\s*{?\s*"?(.*?)"?\s*}?\s*$/, '$1')}</h3>
      { country.capital && <h3>Capital: {country.capital?.replace(/^\s*{?\s*"?(.*?)"?\s*}?\s*$/, '$1') }</h3> }
      { country.subregion && <h3>Subregion:{country.subregion}</h3>}
      { country.area &&  <h3>Area: {country.area}</h3> }
      <h3>Population: {country.population}</h3>
        
    </>
  )
};

export default Detail;