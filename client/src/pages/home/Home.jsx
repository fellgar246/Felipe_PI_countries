import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions'; 
import { Cards, Loading, Nav, typeOptions } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const countries = state.countries;

  //DOM states
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  //Filters states
  const [byType, setByType] = useState([]);
  const [byName, setByName] = useState([]);
  const [byContinent, setByContinent] = useState([]);
  const [byPopulation, setByPopulation] = useState([]);

  //TODO cambiar imagenes de fondo
  //TODO responsive
  //TODO paginado
  //TODO al momento de hacer search nextIcon desaparece

  useEffect(() => {
    dispatch(getCountries());
    
  }, []);

  const filteredCountries = () => {
    if (search.length === 0) countries.slice(currentPage, currentPage + 10);

    const findcountry = search
      .charAt(0)
      .toUpperCase()
      .concat(search.substring(1, search.length));
    const filtered = countries.filter((country) =>
      country.name.includes(findcountry)
    );

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

    return filtered.slice(currentPage, currentPage + 10);
  };

  const onSearch = ({ target }) => {
    setSearch(target.value);
    setCurrentPage(0);
    setByType([]);
    setByName([]);
    setByContinent([]);
    setByPopulation([]);
  };

  const onByType = ({ target }) => {
    handleByType(target.value);
    setCurrentPage(0);
    setSearch("");
    setByName([]);
    setByContinent([]);
    setByPopulation([]);
  };
  const handleByType = (value) => {
    const copyCountries = [...countries];
    const filtered = copyCountries
      .filter((e) => e.Activities.filter((a) => a.type === value).length > 0)
      .flat();
    const data = filtered.filter((element) => typeof element === "object");
    //TODO: Mensaje de error cuando no encuentra ninguna categoría
    setByType(data);
  };

  const onByContinent = ({ target }) => {
    handleByContinent(target.value);
    setCurrentPage(0);
    setSearch("");
    setByType([]);
    setByName([]);
    setByPopulation([]);
  };
  const handleByContinent = (value) => {
    const copyCountries = [...countries];
    const filtered = copyCountries.filter(
      (country) => country.continent === value
    );
    setByContinent(filtered);
  };

  const onByName = ({ target }) => {
    handleByName(target.value);
    setCurrentPage(0);
    setSearch("");
    setByType([]);
    setByContinent([]);
    setByPopulation([]);
  };
  const handleByName = (value) => {
    const copyCountries = [...countries];
    let filtered = [];
    if (value === "ascending") {
      filtered = copyCountries.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (value === "descending") {
      filtered = copyCountries.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    setByName(filtered);
  };

  const onByPopulation = ({ target }) => {
    handleByPopulation(target.value);
    setCurrentPage(0);
    setSearch("");
    setByType([]);
    setByName([]);
    setByContinent([]);
  };
  const handleByPopulation = (value) => {
    const copyCountries = [...countries];
    let filteredPopulation = [];
    if (value === "ascending") {
      filteredPopulation = copyCountries.sort(
        (a, b) => a.population - b.population
      );
    }
    if (value === "descending") {
      filteredPopulation = copyCountries.sort(
        (a, b) => b.population - a.population
      );
    }
    setByPopulation(filteredPopulation);
  };

  //controllers of buttons next and prev page
  const nextPage = () => {
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
    <>
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
            src="./icons/search.svg"
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
                alphabetically
              </option>
              <option value="ascending">A-Z</option>
              <option value="descending">Z-A</option>
            </select>
          </div>
        </div>

    
          <div className={styles.containerCards}>
            {currentPage === 0 ? (
              <span className={styles.span}></span>
            ) : (
              <button onClick={prevPage} className={styles.controllerButton}>
                <img
                  src="./icons/prev.svg"
                  alt="prevIcon"
                  className={styles.prevIcon}
                ></img>
              </button>
            )}
            <Cards filteredCountries={filteredCountries} />
          <button
              onClick={nextPage}
              className={styles.controllerButton}>
              <img
                src="./icons/next.svg"
                alt="nextIcon"
                className={styles.nextIcon}
              ></img>
            </button>
          </div>
      </>)}
    </>
  );
};

export default Home