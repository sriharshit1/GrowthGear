import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ResultsDisplay = () => {
    const results = useSelector((state) => state.results); // Fetch results from Redux store

    return (
        <div>
            <h3>Results</h3>
            {results && results.length > 0 ? (
                <BarChart width={600} height={300} data={results}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
            ) : (
                <p>No Data to display</p>
            )}
        </div>
    );
};

export default ResultsDisplay;