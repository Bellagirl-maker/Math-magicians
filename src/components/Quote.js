import React, { useState, useEffect } from 'react';
import './Quote.css';

const apiKey = 'PvhIKqsrHwPYCrtU+wSBpQ==w8E2CqRsF9rkbWmK';
const apiBaseURL = 'https://api.api-ninjas.com/v1/quotes?category=';
const apiCategory = 'computers';

export default function Quote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${apiBaseURL}${apiCategory}`, {
          method: 'GET',
          headers: { 'X-Api-Key': `${apiKey}` },
          contentType: 'application/json',
        });
        const json = await res.json();
        setQuote(json[0]);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    fetchApi();
  }, []);

  if (error) {
    return (
      <div className="quoteDiv">
        <p className="quote">Something went wrong!</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="quoteDiv">
        <p className="quote">Loading...</p>
      </div>
    );
  }

  return (
    <div className="quoteDiv">
      <p className="quote">
        &quot;
        {quote.quote}
        &quot;
      </p>
      <cite className="author">{quote.author}</cite>
    </div>
  );
}
