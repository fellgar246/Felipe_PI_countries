import { useState, useEffect } from 'react';
import { Cards, Loading, Nav, typeOptions } from "../../components";
import styles from "./Home.module.css";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  //onFilter
  const [byType, setByType] = useState([]);

  const [byName, setByName] = useState([]);

  const [byContinent, setByContinent] = useState([])

  const [byPopulation, setByPopulation] = useState([]);

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
    setByName([])
  }

  const filteredCountries = () =>{
    if( search.length === 0 ) countries.slice(currentPage, currentPage + 10);
   
    const findcountry = search.charAt(0).toUpperCase().concat(search.substring(1, search.length))
    const filtered = countries.filter(country => country.name.includes(findcountry));

    //order by Type cases
    if(byType.length) return byType.slice( currentPage, currentPage + 10 );
    if(byType.length === 0 ) filtered.slice(currentPage, currentPage + 10);

    //order by A-Z cases
    if(byName.length) return byName.slice( currentPage, currentPage + 10 );
    if(byName.length === 0 ) filtered.slice(currentPage, currentPage + 10);
  
    return filtered.slice( currentPage, currentPage + 10 );
  }


  const onByType =({target}) => {
    handleByType(target.value);
    setCurrentPage(0);
    setSearch('');
  }

  const handleByType = (value) => {
    const filtered = countries.filter(e => e.Activities.filter(a => a.type  === value).length > 0).flat();
    const data = filtered.filter(element => typeof element === "object");
    setByType(data);
  }

  //TODO Filtrar por continente
  const onByContinent =({target}) => {
    handleByContinent(target.value);
    setCurrentPage(0);
    setSearch('');
  }

  const handleByContinent = (value) => {
    const filtered = countries.filter(country => country.continent === value );
    console.log(filtered)
    setByContinent(filtered);
  }

  //TODO: Revisar cambio del filtro de ascending a descending
  const onByName= ({target}) => {
    handleByName(target.value);
    setCurrentPage(0);
    setSearch('');
  }

  const handleByName = (value) => {
    let filtered = []
    if( value === "ascending") {
      filtered = countries.sort(function(a, b){
        if(a.name < b.name) { return 1; }
        if(a.name > b.name) { return -1; }
        return 0;
      })
    } 
    if( value === "descending") {
       filtered = countries.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    } 
    console.log(value);
    console.log(filtered.slice(0,20));
    setByName(filtered)
  }

  //TODO: Revisar cambio del filtro de ascending a descending
  const onByPopulation= ({target}) => {
    handleByPopulation(target.value);
    setCurrentPage(0);
    setSearch('');
  }

  const handleByPopulation = (value) => {
    let filtered = []
    if( value === "ascending") {
      filtered = countries.sort((a, b) => a.population - b.population)
    } 
    if( value === "descending") {
      filtered = countries.sort((a, b) => b.population - a.population)
    } 
    setByPopulation(filtered)
  }

  //controllers of buttons next and prev page
  const nextPage = () => {
    //byType
    if(!byType.length)  setCurrentPage( currentPage + 10)
    if(byType.length < 10) return ;

    setCurrentPage( currentPage + 10)
  }

  const prevPage = () => {
    if(currentPage > 0) setCurrentPage( currentPage - 10);
  }

  const continents = [
    { value: '{Asia}' , name: 'Asia'},
    { value: "{\"North America\"}", name: 'North America'},
    { value: '{Europe}' , name: 'Europe'}, 
    { value: '{Oceania}' , name: 'Oceania'},
    { value: "{\"South America\"}" , name: 'South America'},
    { value: '{Antarctica}' , name: 'Antartica'},
    { value: '{Africa}' , name: 'Africa'},  
  ]

  return (
    <>
      <Nav/>
      <div className={styles.hero}>
        <h2 className={styles.title}>Search for a country</h2>
        <input 
          type='text'
          placeholder='Buscar País'
          value={search}
          onChange={onSearch}
          className={styles.searchBar}
        />
      </div>    
      <div>
        <h3 className={styles.subtitle}>
          filter by
        </h3>
        <select 
              onChange={onByType} 
              className={styles.selector}
          >
              <option disabled="">activity</option>
              { typeOptions.map(type => (
                  <option value={type} key={type}>{type}</option>
              ))}
        </select>
        <select 
          onChange={onByContinent}
          className={styles.selector} 
        >
          <option disabled="">continent</option>
          { continents.map(element => (
              <option value={element.value} key={element.name}>{element.name}</option>
          ))}
        </select>
      </div>

      <div >
        <h3 className={styles.subtitle}>
          order by
        </h3>
        <select 
          onChange={onByPopulation}
          className={styles.selector}
        >
          <option disabled="">population</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>     
        <select 
          onChange={onByName}
          className={styles.selector}
        >
          <option disabled="">alphabetically</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select> 
      </div>
     
      <button onClick={prevPage}>
        Prev
      </button>
   
      &nbsp;
      <button onClick={nextPage}>
        Next
      </button>

      { isLoading && <Loading />}
      <Cards 
        countries={countries} 
        filteredCountries={filteredCountries}
      />

    </>
  )
}

export default Home