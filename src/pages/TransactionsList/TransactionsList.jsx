import React, { useState, useEffect } from "react";
import {
  useTransactions,
  useRejectExchangeRequest,
  useAcceptExchangeRequest,
} from "hooks";
import { transactionsListStyles } from "styles";
import { useAuth } from "state";

const TransactionsList = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const {
    transactions: fetchedTransactions,
    loading,
    error,
  } = useTransactions(user);
  const {
    acceptExchangeRequest,
    loadingTransactions: acceptLoadingTransactions,
  } = useAcceptExchangeRequest();
  const {
    rejectExchangeRequest,
    loadingTransactions: rejectLoadingTransactions,
  } = useRejectExchangeRequest();

  useEffect(() => {
    if (fetchedTransactions) {
      const pendingTransactions = fetchedTransactions.filter(
        (transaction) => transaction.status === "pending"
      );

      const sortedPendingTransactions = [...pendingTransactions].sort(
        (a, b) => new Date(b.lastModified) - new Date(a.lastModified)
      );

      const nonPendingTransactions = fetchedTransactions.filter(
        (transaction) => transaction.status !== "pending"
      );

      const sortedTransactions = [
        ...sortedPendingTransactions,
        ...nonPendingTransactions,
      ];

      setTransactions(sortedTransactions);
    }
  }, [fetchedTransactions]);

  const handleAccept = async (transactionId) => {
    await acceptExchangeRequest(transactionId);
    updateTransactionStatus(transactionId, "accepted");
  };

  const handleReject = async (transactionId) => {
    await rejectExchangeRequest(transactionId);
    updateTransactionStatus(transactionId, "rejected");
  };

  const updateTransactionStatus = (transactionId, newStatus) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === transactionId
          ? { ...transaction, status: newStatus }
          : transaction
      )
    );
  };

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={transactionsListStyles.container}>
      <h2 style={transactionsListStyles.header}>Exchange Transactions</h2>
      <ul style={transactionsListStyles.list}>
        {transactions.map((transaction) => (
          <li key={transaction.id} style={transactionsListStyles.listItem}>
            <p>
              <strong>Book Name:</strong> {transaction.bookName}
            </p>
            <p>
              <strong>Sender:</strong> {transaction.senderId}
            </p>
            <p>
              <strong>Recipient:</strong> {transaction.recipientId}
            </p>
            <p>
              <strong>Delivery Method:</strong> {transaction.deliveryMethod}
            </p>
            <p>
              <strong>Exchange Duration:</strong> {transaction.exchangeDuration}
            </p>
            <p>
              <strong>Last Modified:</strong>{" "}
              {new Date(transaction.lastModified).toLocaleString()}
            </p>
            <p>
              <strong>Status:</strong> {transaction.status}
            </p>

            {transaction.status === "pending" &&
              transaction.senderId !== user && (
                <div style={transactionsListStyles.buttonContainer}>
                  <button
                    onClick={() => handleAccept(transaction.id)}
                    disabled={acceptLoadingTransactions[transaction.id]}
                    style={{
                      ...transactionsListStyles.acceptButton,
                      ...(acceptLoadingTransactions[transaction.id]
                        ? transactionsListStyles.disabledButton
                        : {}),
                    }}
                  >
                    {acceptLoadingTransactions[transaction.id]
                      ? "Accepting..."
                      : "Accept"}
                  </button>
                  <button
                    onClick={() => handleReject(transaction.id)}
                    disabled={rejectLoadingTransactions[transaction.id]}
                    style={{
                      ...transactionsListStyles.rejectButton,
                      ...(rejectLoadingTransactions[transaction.id]
                        ? transactionsListStyles.disabledButton
                        : {}),
                    }}
                  >
                    {rejectLoadingTransactions[transaction.id]
                      ? "Rejecting..."
                      : "Reject"}
                  </button>
                </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
