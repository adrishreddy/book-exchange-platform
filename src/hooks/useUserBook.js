import { useState, useEffect } from "react";
import { BASE_URL } from "utils";

const useUserBooks = (username) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `${BASE_URL}/api/books/user/${username}`;

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.text();
        if (!data) {
          setBooks([]);
          return;
        }
        try {
          const jsonData = JSON.parse(data);
          setBooks(jsonData);
        } catch (parseError) {
          throw new Error("Malformed JSON response");
        }
      } catch (error) {
        console.error("Error fetching user books:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchBooks();
    }
  }, [username, API_URL]);

  return { books, loading, error };
};

export default useUserBooks;
