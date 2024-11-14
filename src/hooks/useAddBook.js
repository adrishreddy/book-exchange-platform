import { useState } from "react";
import {BASE_URL} from 'utils'

const useAddBook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addBook = async (bookData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/api/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding book:", error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { addBook, loading, error };
};

export default useAddBook;
