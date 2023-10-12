/* eslint-disable react/prop-types */
import TransactionItem from "../transactionItem/TransactionItem"

const TransactionList = ({ transactions, transactionsFilter, setTransactions, setEdit }) => {

  const deleteTransaction = ({ id }) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }

  return (
    <div>
      {
        transactionsFilter.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} setEdit={setEdit} />
        ))
      }
    </div>
  )
}

export default TransactionList