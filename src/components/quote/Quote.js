import React, {useEffect, useState} from 'react';
import axios from "axios";


function Quote() {
    const [ quote, setQuote ] = useState('');

    useEffect(() => {
        async function getRandomQuote() {
            try {
                const response = await axios.get(`http://localhost:8080/quotes/random`);
                console.log(response.data);
                setQuote(response.data);
            } catch(error) {
                console.error(error);
            }
        }
        getRandomQuote();
    },[])

    return (
        <article className="quote-element">
            <h2>"{quote.text}"</h2>
            <p> - {quote.source} - </p>
        </article>
    );
}

export default Quote;