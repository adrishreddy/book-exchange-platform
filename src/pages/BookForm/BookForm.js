import React, { useState } from 'react';

const BookForm = ({ onSubmit, book }) => {
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [genre, setGenre] = useState(book?.genre || '');
  const [condition, setCondition] = useState(book?.condition || 'New');
  const [available, setAvailable] = useState(book?.available || true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: book?.id || Date.now().toString(),
      title,
      author,
      genre,
      condition,
      available,
    };
    onSubmit(newBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit">{book ? 'Update' : 'Add'} Book</button>
    </form>
  );
};

export default BookForm;
