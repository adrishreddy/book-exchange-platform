import React from 'react';
import { bookListStyles } from 'styles';

const BookList = ({ books, onSendRequest, handleInputChange, bookStates }) => {
  
 

  return (
    <div style={bookListStyles.container}>
      <ul style={bookListStyles.list}>
        {books?.map((book) => {
          const bookState = bookStates[book.id] || {};
          return (
            <li key={book.id} style={bookListStyles.listItem}>
              <h2 style={bookListStyles.title}>{book.title}</h2>
              <p style={bookListStyles.detail}><strong>User:</strong> {book.user}</p>
              <p style={bookListStyles.detail}><strong>Author:</strong> {book.author}</p>
              <p style={bookListStyles.detail}><strong>Genre:</strong> {book.genre}</p>
              <p style={bookListStyles.detail}><strong>Condition:</strong> {book.condition}</p>
              <p style={bookListStyles.detail}><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>

              <div style={bookListStyles.deliveryOptions}>
                <p style={bookListStyles.deliveryLabel}>Delivery Method:</p>
                <label style={bookListStyles.label}>
                  <input
                    type="radio"
                    name={`deliveryMethod-${book.id}`}
                    value="Courier"
                    checked={bookState.deliveryMethod === 'Courier'}
                    onChange={() => handleInputChange(book.id, 'deliveryMethod', 'Courier')}
                    style={bookListStyles.radioInput}
                  />
                  <span style={bookListStyles.radioLabel}>Courier</span>
                </label>
                <label style={bookListStyles.label}>
                  <input
                    type="radio"
                    name={`deliveryMethod-${book.id}`}
                    value="Mail"
                    checked={bookState.deliveryMethod === 'Mail'}
                    onChange={() => handleInputChange(book.id, 'deliveryMethod', 'Mail')}
                    style={bookListStyles.radioInput}
                  />
                  <span style={bookListStyles.radioLabel}>Mail</span>
                </label>
              </div>

              <div style={bookListStyles.durationWrapper}>
                <input
                  type="text"
                  placeholder="Duration (days)"
                  value={bookState.exchangeDuration || ''}
                  onChange={(e) => handleInputChange(book.id, 'exchangeDuration', e.target.value)}
                  style={bookListStyles.durationInput}
                />
              </div>

              <button
                style={bookListStyles.sendRequestButton}
                onClick={() => onSendRequest(book)}
              >
                {bookState.buttonText || 'Send Request'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
