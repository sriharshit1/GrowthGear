import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery,setResults } from "../redux/actions";

function QueryInput(){
    const[query,setQuery]=useState('');
    const dispatch = useDispatch();

    const handleSubmit = ()=>{
        if(query.trim()) {
            dispatch(submitQuery(query));

            const mockResults =[
                { name: `${query} - Metric A`, value: Math.floor(Math.random() * 100) },
                { name: `${query} - Metric B`, value: Math.floor(Math.random() * 100)},
                { name: `${query} - Metric C`, value: Math.floor(Math.random() * 100)},
                
            ];
            dispatch(setResults(mockResults));
        setQuery('');
    }
    
    };

    return (
        <div>
            <input type="text"
            placeholder="Enter your Query"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>

    );
};

export default QueryInput;



