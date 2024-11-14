import { useState } from 'react';
import {BASE_URL} from 'utils';

const useSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (keyword, page , size) => {
    setLoading(true);
    setError(null);
    console.log(keyword,page,size,results.length)
  
    try {
      const response = await fetch(`${BASE_URL}/api/books/search?keyword=${keyword}&page=${page}&size=${size}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true', 
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error('Error searching books:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return { searchBooks, results, loading, error };
};

export default useSearch;
