// app/components/QueryComponent.tsx

"use client";

import React, { useState } from 'react';
import { query } from '@/lib/fetchHuggingFace';

const QueryComponent = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    const handleQuery = async () => {
        try {
            const response = await query({ inputs: input });
            setResult(response);
        } catch (error) {
            console.error("Error querying Hugging Face API:", error);
        }
    };

    return (
        <div>
            <h1>Query Hugging Face API</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your query"
            />
            <button onClick={handleQuery}>Query</button>
            {result && (
                <div>
                    <h2>Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default QueryComponent;
