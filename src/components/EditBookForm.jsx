import React, { useState } from "react";
import { editFormStyles as styles } from 'styles';

const EditBookForm = ({ book, onEditBook, onCancel }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre); 
  const [condition, setCondition] = useState(book.condition);
  const [available, setAvailable] = useState(book.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      ...book,
      title,
      author,
      genre,
      condition,
      available,
    };
    onEditBook(updatedBook);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Edit Book</h2>
      <div style={styles.inputWrapper}>
        <label style={styles.label}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          <option value="" disabled>Select Genre</option>
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
      <button type="submit" style={styles.button}>
        Update Book
      </button>
      <button type="button" onClick={onCancel} style={styles.cancelButton}>
        Cancel
      </button>
    </form>
  );
};

export default EditBookForm;
