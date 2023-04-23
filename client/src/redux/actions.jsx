
export const GET_COUNTRIES = "GET_COUNTRIES";
export const BY_POPULATION = "BY_POPULATION";
export const ADJUST_BY_POPULATION = "ADJUST_BY_POPULATION"; 
export const BY_NAME = "BY_NAME";
export const ADJUST_BY_NAME = "ADJUST_BY_NAME"; 
export const BY_CONTINENT = "BY_CONTINENT";
export const ADJUST_BY_CONTINENT = "ADJUST_BY_CONTINENT"; 
export const BY_TYPE = "BY_TYPE";
export const ADJUST_BY_TYPE = "ADJUST_BY_TYPE"
export const BY_SEARCH = "BY_SEARCH";
export const ADJUST_BY_SEARCH = "ADJUST_BY_SEARCH"


export const getCountries = () => {
    return async function(dispatch) {          
            fetch(`http://localhost:3001/countries/`)
            .then((response) => response.json())
            .then((data) => {
                return dispatch({
                    type: GET_COUNTRIES,
                    payload: data
                })

            });          
        
    };
}

export const getByPopulation = (orderBy) => {
    return {
        type: BY_POPULATION,
        payload: orderBy
    }
}

export const adjustByPopulation = () => {
    return {
        type: ADJUST_BY_POPULATION,
    }
}

export const getByName = (orderBy) => {
    return {
        type: BY_NAME,
        payload: orderBy
    }
}

export const adjustByName = () => {
    return {
        type: ADJUST_BY_NAME,
    }
}

export const getByContinent = (filterBy) => {
    return {
        type: BY_CONTINENT,
        payload: filterBy
    }
}

export const adjustByContinent = () => {
    return {
        type: ADJUST_BY_CONTINENT,
    }
}

export const getByType = (filterBy) => {
    return {
        type: BY_TYPE,
        payload: filterBy
    }
}

export const adjustByType = () => {
    return {
        type: ADJUST_BY_TYPE
    }
}

export const getBySearch = (search) => {
    return {
        type: BY_SEARCH,
        payload: search
    }
}

export const adjustBySearch = () => {
    return {
        type: ADJUST_BY_SEARCH
    }
}
