
export const GET_COUNTRIES = "GET_COUNTRIES"


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
