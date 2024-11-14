import React, { useState, useEffect } from 'react';
import { useAuth } from 'state';
import { useAddBook, useEditBook, useUserBooks, useDeleteBook } from 'hooks';
import { AddBookForm, EditBookForm } from 'components';
import { profileStyles } from 'styles'; 

const Profile = () => {
  const { user } = useAuth();
  const { books: userBooks, loading, error } = useUserBooks(user);
  const { addBook, loading: addBookLoader, error: addBookError } = useAddBook();
  const { editBook } = useEditBook();
  const { deleteBook } = useDeleteBook();

  const [editingBook, setEditingBook] = useState(null);
  const [addingBook, setAddingBook] = useState(false); 
  const [books, setBooks] = useState(userBooks || []);

  useEffect(() => {
    setBooks(userBooks); 
  }, [userBooks]);

  const handleAddBook = async (newBook) => {
    try {
      const addedBook = await addBook(newBook);
      setBooks((prevBooks) => [addedBook, ...prevBooks]);  
      setAddingBook(false);  
    } catch (err) {
      console.error("Failed to add book:", err.message);
    }
  };

  const handleEditBook = async (updatedBook) => {
    try {
      await editBook(updatedBook.id, updatedBook);
      setBooks((prevBooks) =>
        prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
      ); 
      setEditingBook(null);
    } catch (err) {
      console.error("Failed to edit book:", err.message);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  const handleCancelAdd = () => {
    setAddingBook(false); 
  };

  const noUserBooksFound = userBooks.length === 0 && !loading && !error;

  if (loading) return <p>Loading user books...</p>;
  if (noUserBooksFound) return <p>no books are found</p>;

  return (
    <div style={profileStyles.container}>
      <h1 style={profileStyles.header}>{user}'s Profile</h1>
      
      {addBookLoader && <p>Adding book...</p>}
      {addBookError && <p>Error: {addBookError}</p>}

      {/* Always show the "Add Book" button */}
      {!addingBook && (
        <button style={profileStyles.addButton} onClick={() => setAddingBook(true)}>
          Add Book
        </button>
      )}

      {addingBook ? (
        <AddBookForm onAddBook={handleAddBook} onCancel={handleCancelAdd} />
      ) : editingBook ? (
        <EditBookForm
          book={editingBook}
          onEditBook={handleEditBook}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          {/* Show books list */}
          {books.length === 0 ? (
            <p style={profileStyles.noBooksMessage}>You don't have any books yet.</p>
          ) : (
            <ul style={profileStyles.list}>
              {books.map((book) => (
                <li key={book.id} style={profileStyles.listItem}>
                  <h2 style={profileStyles.title}>{book.title}</h2>
                  <p style={profileStyles.detail}><strong>Author:</strong> {book.author}</p>
                  <p style={profileStyles.detail}><strong>Genre:</strong> {book.genre}</p>
                  <p style={profileStyles.detail}><strong>Condition:</strong> {book.condition}</p>
                  <p style={profileStyles.detail}><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
                  <div style={profileStyles.actionButtons}>
                    <button
                      style={{ ...profileStyles.actionButton, ...profileStyles.editButton }}
                      onClick={() => handleEditClick(book)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ ...profileStyles.actionButton, ...profileStyles.deleteButton }}
                      onClick={() => handleDeleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    
    </div>
  );
};

export default Profile;
