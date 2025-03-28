import React from 'react';
import { useSelector } from 'react-redux';

const QueryHistory = () => {
    const history = useSelector((state) => state.queryHistory); 

    return (
        <div>
            <h3>Query History</h3>
            {history && history.length > 0 ? (
                <ul>
                    {history.map((query, index) => (
                        <li key={index}>{query}</li>
                    ))}
                </ul>
            ) : (
                <p>No Queries submitted yet.</p>
            )}
        </div>
    );
};

export default QueryHistory;