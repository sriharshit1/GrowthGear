const initialState = {
    queryHistory: [],
    results: null
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'SUBMIT_QUERY':
            return{
                ...state,
                queryHistory : [...state.queryHistory,action.payload],
            };
            case 'SET_RESULTS':
                return{
                    ...state,
                    results: action.payload
                };
                default:
                    return state;
    }
};

export default rootReducer;