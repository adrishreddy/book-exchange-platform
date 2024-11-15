import { useState } from 'react';
import {BASE_URL} from 'utils';

const useExchangeRequest = () => {
  const [buttonText, setButtonText] = useState('Send Request');
  const [error, setError] = useState(null);

  const sendExchangeRequest = async (senderId, recipientId, bookId, bookName, deliveryMethod, exchangeDuration) => {
    const requestBody = {
      senderId,
      recipientId,
      bookId,
      bookName,
      deliveryMethod,
      exchangeDuration,
    };

    try {
      const response = await fetch(`${BASE_URL}/exchange/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.text();
        setButtonText(responseData); 
      } else {
        setButtonText('Request Failed');
      }
    } catch (error) {
      setButtonText('Request Error');
      setError(error.message);
      console.error('Request failed:', error);
    }
  };

  return { sendExchangeRequest, buttonText, error };
};

export default useExchangeRequest;
