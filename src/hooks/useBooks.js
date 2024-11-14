import { useState, useEffect, useCallback } from 'react';
import {BASE_URL} from 'utils'


const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/api/books`, {
        method: 'GET',
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks(); 
  }, [fetchBooks]);

  return { books, loading, error, fetchBooks };
};

export default useFetchBooks;
