import { useState, useEffect } from 'react';
import {BASE_URL} from 'utils';

const useTransactions = (user) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!user) return; 
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${BASE_URL}/exchange/requests/${user}`, {
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
        setTransactions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  return { transactions, loading, error };
};

export default useTransactions;
