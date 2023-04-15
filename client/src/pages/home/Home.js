import { useState, useEffect } from 'react';

import { Cards, Loading, typeOptions } from "../../components";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  //onFilter
  const [byType, setByType] = useState([]);

  const [orderBy, setOrderBy] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/countries/`)
     .then((response) => response.json())
     .then((data) => {
        if(!data.length) return window.alert("No hay resultados para esa busqueda");
        setIsLoading(false)
        setCountries(data)
    })
  }, [])

  const onSearch = ({target}) => {
    setSearch(target.value)
    setCurrentPage(0);
    setByType([])
  }

  const filteredCountries = () =>{
    if( search.length === 0 ) countries.slice(currentPage, currentPage + 10);
   
    const findcountry = search.charAt(0).toUpperCase().concat(search.substring(1, search.length))
    const filtered = countries.filter(country => country.name.includes(findcountry));
    if(byType.length) {
      return byType.slice( currentPage, currentPage + 10 )
    } 
    if( byType.length === 0 ) countries.slice(currentPage, currentPage + 10);
  
    return filtered.slice( currentPage, currentPage + 10 )
  }

  const onFilter =({target}) => {
    handleFilter(target.value)
    setCurrentPage(0);
    setSearch('')
  }

  const handleFilter = (value) => {
    const filtered = countries.filter(e => e.Activities.filter(a => a.type  === value).length > 0).flat();
    const data = filtered.filter(element => typeof element === "object")
    console.log(countries)
    console.log(value);
    console.log(data);
    setByType(data)
  }

  const onOrderBy= ({target}) => {
    handleOrderBy(target.value)
  }

  const handleOrderBy = (value) => {
    if( value=== "ascending") countries.sort((a,b) => a.name - b.name);
    else countries.sort((a,b) => b.name - a.name)
    console.log(value)
    console.log(countries[0])
    
  }

  const nextPage = () => {
    if(byType.length < 10) return
    setCurrentPage( currentPage + 10)
  }

  const prevPage = () => {
    if(currentPage > 0) setCurrentPage( currentPage - 10);
  }

 

  return (
    <>
      <h3>HOME</h3>
      
      <input 
        type='text'
        placeholder='Buscar País'
        value={search}
        onChange={onSearch}
      />
      <button onClick={prevPage}>
        Anteriores
      </button>
   
      &nbsp;
      <button onClick={nextPage}>
        Siguientes
      </button>

      <label>
        Filtar por tipo de actividad
      </label>
      <select 
            onChange={onFilter} 
        >
            <option disabled="">Choose a type</option>
            { typeOptions.map(type => (
                <option value={type} key={type}>{type}</option>
            ))}
        </select>
        <label>
        Orderna por
        </label>
        <select 
              onChange={onOrderBy}
          >
              <option disabled="">Order by</option>
              <option value="asecending">Ascending</option>
              <option value="descending">Descending</option>
          </select> 

      { isLoading && <Loading />}
     
      <Cards 
        countries={countries} 
        filteredCountries={filteredCountries}
      />

    </>
  )
}

export default Home