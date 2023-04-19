import { GET_COUNTRIES } from "./actions"; 

const initialState = {
    countries : [],
    byPopulation: []
};

const rootReducer = (state= initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                errors: {}
            }            
        default:
            return { ...state };
    }
};

export default rootReducer;