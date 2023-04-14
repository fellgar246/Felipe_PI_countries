

const initialState = {

};

const rootReducer = (state= initialState, action) => {
    switch(action.type) {
        // case ADD_FAV:
        //     return {
        //         ...state,
        //         myFavorites: action.payload, 
        //         allCharacters: action.payload, 
        //         errors: {}
        //     }
        default:
            return;
    }
};

export default rootReducer;