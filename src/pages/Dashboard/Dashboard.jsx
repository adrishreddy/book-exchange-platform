import React, { useState, useEffect, useCallback } from "react";
import { BookList, Profile, TransactionsList } from "pages";
import { dashboardStyles } from "styles";
import { useBooks, useSearch, useExchangeRequest } from "hooks";
import { useAuth } from "state";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("bookList");
  const [searchTerm, setSearchTerm] = useState("");
  const { books, fetchBooks: fetchAllBooks } = useBooks();
  const { searchBooks, results, loading, error } = useSearch();
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isGenre, setIsGenre] = useState(false); 
  const [selectedGenre, setSelectedGenre] = useState("");
  const [bookStates, setBookStates] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  let typingTimeout;

  const { user } = useAuth();
  const { sendExchangeRequest } = useExchangeRequest();

  const handleSendRequest = (book) => {
    const { deliveryMethod, exchangeDuration } = bookStates[book.id] || {};
    sendExchangeRequest(
      user,
      book.user,
      book.id,
      deliveryMethod || "Mail",
      `${exchangeDuration || ""} days`
    ).then(() => {
      setBookStates((prevStates) => ({
        ...prevStates,
        [book.id]: {
          ...prevStates[book.id],
          buttonText: "Exchange request sent!",
        },
      }));
    });
  };

  const handleInputChange = (bookId, field, value) => {
    setBookStates((prevStates) => ({
      ...prevStates,
      [bookId]: { ...prevStates[bookId], [field]: value },
    }));
  };

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  const applyFilters = useCallback(() => {
    let filteredBooks = searchTerm.trim() ? results : books;
    if (isAvailable) {
      filteredBooks = filteredBooks.filter((book) => book.available === true);
    }
    if (isGenre && selectedGenre) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.genre && book.genre.toLowerCase() === selectedGenre.toLowerCase()
      );
    }

    setDisplayedBooks(filteredBooks);
  }, [searchTerm, results, books, isAvailable, isGenre, selectedGenre]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "profile") {
      setSearchTerm("");
      setDisplayedBooks([]);
    } else {
      setDisplayedBooks(books);
    }
  };

  const handleSearchChange = (event) => {
    clearTimeout(typingTimeout);
    setSearchTerm(event.target.value);
    setIsTyping(true);

    typingTimeout = setTimeout(() => {
      setIsTyping(false);
      handleSearch(event.target.value);
    }, 500);
  };

  const handleSearch = (term) => {
    if (term.trim()) {
      searchBooks(term, 1, 10);
    } else {
      setDisplayedBooks(books);
    }
  };

  const handleSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filteredBooks = displayedBooks.filter((book) => book.user !== user);

  const noBooksFound = filteredBooks.length === 0 && !loading && !error;

  const totalPages = Math.ceil(filteredBooks.length / pageSize);
  
  const paginatedBooks = filteredBooks.slice(
    (page - 1) * pageSize, 
    page * pageSize
  );


  return (
    <div style={dashboardStyles.container}>
      <h1 style={dashboardStyles.header}>Dashboard</h1>

      {activeTab === "bookList" && (
        <form
          onSubmit={(e) => e.preventDefault()}
          style={dashboardStyles.searchContainer}
        >
          <div style={dashboardStyles.searchInputWrapper}>
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={dashboardStyles.searchInput}
            />
          </div>

          <div style={dashboardStyles.filterContainer}>
            <label style={dashboardStyles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
              />
              Available
            </label>

            <label style={dashboardStyles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isGenre}
                onChange={(e) => setIsGenre(e.target.checked)}
              />
              Genre
            </label>

            {isGenre && (
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                style={{
                  ...dashboardStyles.genreDropdown,
                  ...(selectedGenre ? dashboardStyles.genreDropdownFocus : {}),
                }}
              >
                <option value="">Select Genre</option>
                <option value="fiction">Fiction</option>
                <option value="comedy">Comedy</option>
                <option value="scifi">Sci-Fi</option>
              </select>
            )}
          </div>
        </form>
      )}

      {error && <p style={dashboardStyles.error}>{error}</p>}

      <div style={dashboardStyles.buttonContainer}>
        <button
          style={{
            ...dashboardStyles.button,
            ...(activeTab === "bookList"
              ? dashboardStyles.activeButton
              : dashboardStyles.inactiveButton),
          }}
          onClick={() => handleTabChange("bookList")}
        >
          Book List
        </button>
        <button
          style={{
            ...dashboardStyles.button,
            ...(activeTab === "profile"
              ? dashboardStyles.activeButton
              : dashboardStyles.inactiveButton),
          }}
          onClick={() => handleTabChange("profile")}
        >
          Profile
        </button>
        <button
          style={{
            ...dashboardStyles.button,
            ...(activeTab === "transactions"
              ? dashboardStyles.activeButton
              : dashboardStyles.inactiveButton),
          }}
          onClick={() => handleTabChange("transactions")}
        >
          Exchange Transactions
        </button>
      </div>

      <div>
        {activeTab === "bookList" &&
          (isTyping || loading ? (
            <p>Loading...</p>
          ) : noBooksFound ? (
            <p>No books found</p>
          ) : (
            <>
              <div style={dashboardStyles.paginationContainer}>
                
                <label style={dashboardStyles.pageSizeLabel}>
                  Show
                  <span style={dashboardStyles.space}></span>
                  <select
                    value={pageSize}
                    onChange={handleSizeChange}
                    style={dashboardStyles.sizeDropdown}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                  <span style={dashboardStyles.space}></span>
                  per page
                </label>

                <div style={dashboardStyles.pagination}>
                  <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1 || filteredBooks.length === 0}
                    style={{
                      ...dashboardStyles.pageButton,
                      ...(page === 1 || filteredBooks.length === 0
                        ? dashboardStyles.disabledButton
                        : {}),
                    }}
                  >
                    &lt;
                  </button>

                  <span style={dashboardStyles.pageNumber}>{page}</span>

                  <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page >= totalPages || filteredBooks.length === 0}
                    style={{
                      ...dashboardStyles.pageButton,
                      ...(page >= totalPages || filteredBooks.length === 0
                        ? dashboardStyles.disabledButton
                        : {}),
                    }}
                  >
                    &gt;
                  </button>
                </div>

                <div style={dashboardStyles.totalBooksCountWrapper}>
                  <label style={dashboardStyles.totalBooksLabel}>
                    Total Books: {filteredBooks.length}
                  </label>
                </div>
              </div>

              <BookList
                books={paginatedBooks}
                onSendRequest={handleSendRequest}
                handleInputChange={handleInputChange}
                bookStates={bookStates}
              />
            </>
          ))}
        {activeTab === "profile" && <Profile />}
        {activeTab === "transactions" && <TransactionsList />}
      </div>
    </div>
  );
};

export default Dashboard;
