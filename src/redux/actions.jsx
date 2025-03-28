export const submitQuery =(query)=>({
    type: 'SUBMIT_QUERY',
    payload: query
});

export const setResults = (results)=>({
    type: 'SET_RESULTS',
    payload: results
});