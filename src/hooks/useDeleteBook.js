import { useState } from "react";
import {BASE_URL} from 'utils';

const useDeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteBook = async (bookId) => {
    setLoading(true);
    setError(null);

    const API_URL = `${BASE_URL}/api/books/id/${bookId}`;

    try {
      const response = await fetch(API_URL, {
        method: "DELETE",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      if (response.status === 204) {
        return true;
      }

      return await response.json();
    } catch (error) {
      console.error("Error deleting book:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteBook, loading, error };
};

export default useDeleteBook;
