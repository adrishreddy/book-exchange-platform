export const loginFormStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    width: "300px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export const textInputStyles = {
  inputWrapper: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },
};

export const buttonStyles = {
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
export const bookListStyles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    backgroundColor: "#fff",
    marginBottom: "20px",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  detail: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "5px",
  },
  deliveryOptions: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
  },
  deliveryLabel: {
    fontSize: "1rem",
    color: "#333",
    fontWeight: "600",
    marginBottom: "8px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "8px",
  },
  radioInput: {
    marginRight: "8px",
  },
  radioLabel: {
    fontSize: "1rem",
    color: "#333",
    fontWeight: "500",
  },
  durationWrapper: {
    marginTop: "15px",
  },
  durationInput: {
    padding: "8px 12px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  sendRequestButton: {
    marginTop: "15px",
    padding: "12px 20px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  sendRequestButtonHover: {
    backgroundColor: "#0056b3",
  },
};

export const dashboardStyles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  searchContainer: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  searchInputWrapper: {
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
  },
  searchInput: {
    padding: "10px 15px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px 0 0 8px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
  },
  searchButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "0 8px 8px 0",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  searchButtonHover: {
    backgroundColor: "#0056b3",
  },
  filterContainer: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  checkboxLabel: {
    fontSize: "1rem",
    color: "#333",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    margin: "0 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
  activeButton: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  inactiveButton: {
    backgroundColor: "#e0e0e0",
    color: "#000",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "20px",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
  },
  pageSizeLabel: {
    marginRight: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  sizeDropdown: {
    padding: "5px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  pageButton: {
    padding: "5px 8px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  disabledButton: {
    backgroundColor: "#f0f0f0",
    color: "#ccc",
    cursor: "not-allowed",
  },
  pageNumber: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    padding: "0 10px",
  },
  space: {
    marginLeft: "5px",
    marginRight: "5px",
  },
  totalBooksCountWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "10px",
  },
  totalBooksLabel: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  genreDropdown: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "#f5f5f5", // Light background for contrast
    transition: "border-color 0.3s ease, background-color 0.3s ease",
    outline: "none",
    cursor: "pointer",
  },
  genreDropdownFocus: {
    borderColor: "#007BFF", // Blue color on focus
    backgroundColor: "#e9f7ff", // Light blue background when focused
  },
  genreDropdownHover: {
    borderColor: "#007BFF", // Blue border on hover
    backgroundColor: "#f0f8ff", // Light blue on hover
  },

};

export const profileStyles = {
  container: {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    maxWidth: "800px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  addButton: {
    display: "block",
    margin: "10px auto",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    position: "relative",
  },
  title: {
    fontSize: "1.5rem",
    margin: "0 0 5px 0",
    color: "#333",
  },
  detail: {
    margin: "5px 0",
    color: "#555",
  },
  actionButtons: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
  },
  actionButton: {
    padding: "5px 10px",
    marginLeft: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  editButton: {
    backgroundColor: "#ffc107",
    color: "#fff",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
  },
};

export const addBookconstStyles = {
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  inputWrapper: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginRight: "10px",
  },
  cancelButton: {
    padding: "10px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export const editFormStyles = {
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  inputWrapper: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginRight: "10px",
  },
  cancelButton: {
    padding: "10px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export const transactionsListStyles = {
  container: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  buttonContainer: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  acceptButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  rejectButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  disabledButton: {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
    pointerEvents: "none",
  },
  buttonHover: {
    ":hover": {
      transform: "scale(1.05)",
    },
  },
};
