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

  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState(1);

  const [filterValues, setFilterValues] = useState({
    search: "",
    type: "",
    continent: "",
    population: "",
    name: ""
  })

  useEffect(() => {
    dispatch(getCountries());
    
  }, []);

  const filteredCountries = () => {
    //filter by Search
    if (bySearch.length) {
      return bySearch
    }
    //filter by Type
    if (byType.length) {
      return byType;
    }
    //filter by Continet
    if (byContinent.length) {
      return byContinent
    }
    //order by Population
    if (byPopulation.length) {
      return byPopulation;
    }
    //order by Name
    if (byName.length) {
      return byName;
    }
    return countries;
  };

  const onSearch = ({ target }) => {
    setFilterValues({
      ...filterValues,
      search: target.value,
      type: "",
      continent: "",
      population: "",
      name: ""
    })
    dispatch(getBySearch(filterValues.search))
    dispatch(adjustBySearch())
    setCurrentPage(1);
  };

  const onByType = ({ target }) => {
    dispatch(getByType(target.value));
    dispatch(adjustByType());
    setCurrentPage(1);
    setPageInput(1);
    setFilterValues({
      ...filterValues,
      search: "",
      type: target.value,
      continent: "",
      population: "",
      name: ""
    })
  };

  const onByContinent = ({ target }) => {
    dispatch(getByContinent(target.value))
    dispatch(adjustByContinent())
    setCurrentPage(1);
    setPageInput(1);
    setFilterValues({
      ...filterValues,
      search: "",
      type: "",
      continent: target.value,
      population: "",
      name: ""
    })
  };

  const onByPopulation = ({ target }) => {
    dispatch(getByPopulation(target.value));
    dispatch(adjustByPopulation())
    setCurrentPage(1);
    setPageInput(1);
    setFilterValues({
      ...filterValues,
      search: "",
      type: "",
      continent: "",
      population: target.value,
      name: ""
    })
  };

  const onByName = ({ target }) => {
    dispatch(getByName(target.value))
    dispatch(adjustByName())
    setCurrentPage(1);
    setPageInput(1);
    setFilterValues({
      ...filterValues,
      search: "",
      type: "",
      continent: "",
      population: "",
      name: target.value,
    })
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
            value={filterValues.search}
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
            <select
              onChange={onByType}
              className={styles.selector}
              value={filterValues.type}>
              <option disabled="" value="">
                activity
              </option>
              {typeOptions.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
                  onChange={onByContinent}
                  className={styles.selector}
                  value={filterValues.continent}>
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
            <select
                onChange={onByPopulation}
                className={styles.selector}
                value={filterValues.population}>
              <option disabled="" value="">
                population
              </option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
            <select
              onChange={onByName}
              className={styles.selector}
              value={filterValues.name}>
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
            <Cards
                filteredCountries={filteredCountries}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} 
                pageInput={pageInput}
                setPageInput={setPageInput}  
                />
          </div>
        }
      </>)}
    </div>
  );
};

export default Home