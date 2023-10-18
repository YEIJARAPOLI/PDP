/* eslint-disable react/prop-types */
import TransactionItem from "../transactionItem/TransactionItem"

const TransactionList = ({ transactions, transactionsFilter, setTransactions, setEdit, setMessage, setshow, setVariant }) => {

  const deleteTransaction = ({ id }) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))

    sendAlert({message: "Registro eliminado con éxito"})
  }

  const sendAlert = ({ message }) => {
    setVariant("success")
    setMessage(message)
    setshow(true)
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