import { useState } from 'react';
import {BASE_URL} from 'utils';

const useRejectExchangeRequest = () => {
  const [loadingTransactions, setLoadingTransactions] = useState({});

  const rejectExchangeRequest = async (transactionId) => {
    setLoadingTransactions((prevState) => ({ ...prevState, [transactionId]: true }));
    try {
      const response = await fetch(`${BASE_URL}/exchange/reject/${transactionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
      });
      const data = await response.json();
      console.log(data.message);
    } catch (err) {
      console.error('Error rejecting exchange request:', err);
    } finally {
      setLoadingTransactions((prevState) => ({ ...prevState, [transactionId]: false }));
    }
  };

  return { rejectExchangeRequest, loadingTransactions };
};

export default useRejectExchangeRequest;
