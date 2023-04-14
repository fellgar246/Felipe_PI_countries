import { useState, useEffect } from 'react';

import { SearchBar, Cards } from "../../components";

const Home = () => {

  const [countries, setCountries] = useState([])

  const onSearch = async(name) => {    
    //TODO: agregar condicion cuando name viene vacio
    fetch(`http://localhost:3001/countries/name?=${name}`)
       .then((response) => response.json())
       .then((data) => {
          if(!data.length) return window.alert("No hay resultados para esa busqueda");
          setCountries(data)
    })
  }

  return (
    <>
      <h3>HOME</h3>
      <SearchBar  onSearch={onSearch} />
      <Cards countries={countries} />

    </>
  )
}

export default Home