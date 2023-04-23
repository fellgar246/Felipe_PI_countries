import { 
        GET_COUNTRIES, 
        BY_POPULATION, 
        ADJUST_BY_POPULATION, 
        BY_NAME, 
        ADJUST_BY_NAME, 
        BY_CONTINENT,
        ADJUST_BY_CONTINENT,
        BY_TYPE,
        ADJUST_BY_TYPE,
        BY_SEARCH,
        ADJUST_BY_SEARCH,
    } from "./actions"; 

const initialState = {
    countries : [],
    byPopulation: [],
    byName: [],
    byContinent: [],
    byType: [],
    bySearch: [],
    results: false
};

const rootReducer = (state= initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                errors: {}
            }  
        case BY_POPULATION:
            let filteredPopulation = [];
            if (action.payload === "ascending") {
              filteredPopulation = state.countries.sort(
                (a, b) => a.population - b.population
              );
            }
            if (action.payload === "descending") {
              filteredPopulation = state.countries.sort(
                (a, b) => b.population - a.population
              );
            }  
            return {
                ...state,
                byPopulation: filteredPopulation
            } 
        case ADJUST_BY_POPULATION:
            return {
                ...state,
                byName: [],
                byContinent: [],
                byType: [],
                bySearch: [],
                results: false,
            }  
        case BY_NAME:
            let filteredName = [];
            if (action.payload === "ascending") {
                filteredName = state.countries.sort(function (a, b) {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              });
            }
            if (action.payload === "descending") {
                filteredName = state.countries.sort(function (a, b) {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
                return 0;
              });
            }
            return {
                ...state,
                byName: filteredName
            }
        case ADJUST_BY_NAME:
            return {
                ...state,
                byPopulation: [],
                byContinent: [],
                byType: [],
                bySearch: [],
                results: false,
            }  
        case BY_CONTINENT:
            const filteredContinent = state.countries.filter(
              (country) => country.continent === action.payload
            );
            return {
                ...state,
                byContinent: filteredContinent
            }
        case ADJUST_BY_CONTINENT:
            return {
                ...state,
                byPopulation: [],
                byName: [],
                byType: [],
                bySearch: [],
                results: false,
            } 
        case BY_TYPE:
            let resultsType;
            const filteredType = state.countries.filter((e) => e.Activities.filter((a) => a.type === action.payload).length > 0).flat();
            const dataType = filteredType.filter((element) => typeof element === "object");
            !dataType.length ? resultsType=true : resultsType=false;
            return {
                ...state,
                byType: dataType,
                results: resultsType
            }
        case ADJUST_BY_TYPE:
            return {
                ...state,
                byPopulation: [],
                byName: [],
                byContinent: [],
                bySearch: [],
            } 
        case BY_SEARCH:
            let resultsSearch;
            const findcountry = action.payload.charAt(0).toUpperCase().concat(action.payload.substring(1, action.payload.length));
            const filteredCountry = state.countries.filter((country) =>
                    country.name.includes(findcountry)
                );
            !filteredCountry.length ? resultsSearch=true : resultsSearch=false
            return {
                ...state,
                bySearch: filteredCountry,
                results: resultsSearch
            }

        case ADJUST_BY_SEARCH:
            return {
                ...state,
                byPopulation: [],
                byName: [],
                byContinent: [],
                byType: [],
            } 

        default:
            return { ...state };
    }
};

export default rootReducer;