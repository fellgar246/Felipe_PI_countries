import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
          getCountries, 
          getByPopulation, 
          adjustByPopulation, 
          getByName, 
          adjustByName ,
          getByContinent,
          adjustByContinent,
          getByType,
          adjustByType,
          getBySearch,
          adjustBySearch
        } from '../../redux/actions'; 
import { Cards, Loading, Nav, NoResults, typeOptions } from "../../components";

import styles from "./Home.module.css";
import nextIcon from "../../assets/icons/next.svg";
import prevIcon from "../../assets/icons/prev.svg";
import searchIcon from "../../assets/icons/search.svg";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const countries = state.countries;
  const byPopulation = state.byPopulation;
  const byName = state.byName;
  const byContinent = state.byContinent;
  const byType = state.byType;
  const bySearch = state.bySearch;
  const noResults = state.results;

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");


  //TODO paginado
  //TODO setear filtros

  useEffect(() => {
    dispatch(getCountries());
    
  }, []);

  const filteredCountries = () => {
 
    //filter by Search
    if (bySearch.length) {
      return bySearch.slice(currentPage, currentPage + 10);
    }

    //filter by Type
    if (byType.length) {
      return byType.slice(currentPage, currentPage + 10);
    }
    //filter by Continet
    if (byContinent.length) {
      return byContinent.slice(currentPage, currentPage + 10);
    }
    //order by Population
    if (byPopulation.length) {
      return byPopulation.slice(currentPage, currentPage + 10);
    }
    //order by Name
    if (byName.length) {
      return byName.slice(currentPage, currentPage + 10);
    }

    return countries.slice(currentPage, currentPage + 10);
  };

  const onSearch = ({ target }) => {
    setSearch(target.value)
    dispatch(getBySearch(search))
    dispatch(adjustBySearch())
    setCurrentPage(0);
  };

  const onByType = ({ target }) => {
    dispatch(getByType(target.value))
    dispatch(adjustByType())
    setCurrentPage(0);
  };

  const onByContinent = ({ target }) => {
    dispatch(getByContinent(target.value))
    dispatch(adjustByContinent())
    setCurrentPage(0);
  };

  const onByName = ({ target }) => {
    dispatch(getByName(target.value))
    dispatch(adjustByName())
    setCurrentPage(0);
  };

  const onByPopulation = ({ target }) => {
    dispatch(getByPopulation(target.value));
    dispatch(adjustByPopulation())
    setCurrentPage(0);
  };

  //controllers of buttons next and prev page
  const nextPage = () => {
    if (bySearch.length) {
      if (bySearch.length < currentPage + 20) return;
    }
    if (byType.length) {
      if (byType.length < currentPage + 10) return;
    }
    if (byContinent.length) {
      if (byContinent.length < currentPage + 10) return;
    }
    if (byPopulation.length) {
      if (byPopulation.length < currentPage + 20) return;
    }
    if (byName.length) {
      if (byName.length < currentPage + 20) return;
    }
    if (countries.length) {
      if (countries.length < currentPage + 20) return;
    }
    setCurrentPage(currentPage + 10);
  };

  console.log(currentPage)

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 10);
    }
  };

  const continents = [
    { value: "{Asia}", name: "Asia" },
    { value: '{"North America"}', name: "North America" },
    { value: "{Europe}", name: "Europe" },
    { value: "{Oceania}", name: "Oceania" },
    { value: '{"South America"}', name: "South America" },
    { value: "{Antarctica}", name: "Antartica" },
    { value: "{Africa}", name: "Africa" },
  ];

  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.hero}>
        <h2 className={styles.title}>Search for a country</h2>
        <div className={styles.containerSearch}>
          <input
            type="text"
            placeholder="Search . . ."
            value={search}
            onChange={onSearch}
            className={styles.searchBar}
          />
          <img
            src={searchIcon}
            alt="searchIcon"
            className={styles.searchIcon}
          />
        </div>
      </div>
      {!countries.length ? (
        <Loading />
      ) : (<>
        <div className={styles.containerFilters}>
          <div className={styles.subcontainerFilters}>
            <h3 className={styles.subtitle}>filter by</h3>
            <select onChange={onByType} className={styles.selector}>
              <option disabled="" value="">
                activity
              </option>
              {typeOptions.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
            <select onChange={onByContinent} className={styles.selector}>
              <option disabled="" value="">
                continent
              </option>
              {continents.map((element) => (
                <option value={element.value} key={element.name}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.subcontainerFilters}>
            <h3 className={styles.subtitle}>order by</h3>
            <select onChange={onByPopulation} className={styles.selector}>
              <option disabled="" value="">
                population
              </option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            <select onChange={onByName} className={styles.selector}>
              <option disabled="" value="">
                name
              </option>
              <option value="ascending">A-Z</option>
              <option value="descending">Z-A</option>
            </select>
          </div>
        </div>

        {noResults ? <NoResults /> : 
          <div className={styles.containerCards}>
            <div className={styles.containerCardsButtons}>
              <button 
                onClick={prevPage} 
                className={styles.buttonPrevNext}>
                <img
                  src={prevIcon}
                  alt="prevIcon"
                  className={styles.prevIcon}
                ></img>
              </button>
              <button
                onClick={nextPage}
                className={styles.buttonPrevNext}>
                <img
                  src={nextIcon}
                  alt="nextIcon"
                  className={styles.nextIcon}
                ></img>
              </button>
            </div>
            <Cards filteredCountries={filteredCountries} />
          </div>
        }
      </>)}
    </div>
  );
};

export default Home