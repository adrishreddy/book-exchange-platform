import { useState } from 'react';
import {BASE_URL} from 'utils'

const useAcceptExchangeRequest = () => {
  const [loadingTransactions, setLoadingTransactions] = useState({});

  const acceptExchangeRequest = async (transactionId) => {
    setLoadingTransactions((prevState) => ({ ...prevState, [transactionId]: true }));
    try {
      const response = await fetch(`${BASE_URL}/exchange/accept/${transactionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
      });
      const data = await response.json();
      console.log(data.message);
    } catch (err) {
      console.error('Error accepting exchange request:', err);
    } finally {
      setLoadingTransactions((prevState) => ({ ...prevState, [transactionId]: false }));
    }
  };

  return { acceptExchangeRequest, loadingTransactions };
};

export default useAcceptExchangeRequest;
