import React, { useState, useContext } from "react";
import { AuthContext } from "state";
import { useAddBook } from "hooks";
import { editFormStyles as styles } from "styles";

const AddBookForm = ({ onAddBook, onCancel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [condition, setCondition] = useState("");
  const [available, setAvailable] = useState(true);
  const { user } = useContext(AuthContext);
  const { error, loading } = useAddBook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      genre,
      condition,
      available,
      user: user,
    };

    if (!error) {
      onAddBook(newBook);
      setTitle("");
      setAuthor("");
      setGenre("");
      setCondition("");
      setAvailable(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Add Book</h2>
      <div style={styles.inputWrapper}>
        <label style={styles.label}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={styles.input}
          required
        />
      </div>
      <div style={styles.inputWrapper}>
        <label style={styles.label}>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          style={styles.input}
          required
        />
      </div>
      <div style={styles.inputWrapper}>
        <label style={styles.label}>Genre</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={styles.input}
          required
        >
          <option value="" disabled>
            Select Genre
          </option>
          <option value="fiction">Fiction</option>
          <option value="comedy">Comedy</option>
          <option value="scifi">Sci-Fi</option>
        </select>
      </div>
      <div style={styles.inputWrapper}>
        <label style={styles.label}>Condition</label>
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition"
          style={styles.input}
          required
        />
      </div>
      <div style={styles.inputWrapper}>
        <label style={styles.label}>Available</label>
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
          style={styles.checkbox}
        />
      </div>
      <button type="submit" disabled={loading} style={styles.button}>
        {loading ? "Adding..." : "Add Book"}
      </button>
      <button type="button" onClick={onCancel} style={styles.cancelButton}>
        Cancel
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default AddBookForm;
