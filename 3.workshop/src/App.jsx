/* eslint-disable no-unreachable */
import { useEffect, useState } from 'react'

//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.min.js'
import style from './App.module.css'
import Balance from './components/balance/Balance'
import Form from './components/form/Form'
import TransactionList from './components/transactionList/TransactionList'
import Filter from './components/filter/Filter'
import Alert from './components/alert/Alert'

function App() {

  const [initialBalance, setInitialBalance] = useState(0)
  const [finalBalance, setFinalBalance] = useState(0)

  // Variables del Form
  const [form, setForm] = useState(
    {
      id: null,
      type: "",
      name: "",
      qty: 0
    }
  )

  // Variables de Transactions
  const [transactionsFilter, setTransactionsFilter] = useState([])
  const [transactions, setTransactions] = useState([])
  const [filter, setFilter] = useState(
    {
      search: "",
      all: true,
      income: false,
      spent: false
    }
  )
  const [edit, setEdit] = useState(null)

  const calcularSaldoFinal = transactions.reduce((total, transaction) => {
    if (transaction.type === "Ingreso") {
      return total + transaction.qty
    } else {
      return total - transaction.qty
    }

    return total;
  }, initialBalance)

  const setFilterSearch = () => {
    let transactionsFilter = []

    if (filter.all) {
      if (filter.search.length > 0) {
        transactionsFilter = transactions.filter((transaction) => transaction.name.includes(filter.search))
      } else {
        transactionsFilter = transactions
      }
    } else if (filter.income) {
      if (filter.search.length > 0) {
        transactionsFilter = transactions.filter((transaction) => transaction.name.includes(filter.search) && transaction.type === "Ingreso")
      } else {
        transactionsFilter = transactions.filter((transaction) => transaction.type === "Ingreso")
      }
    } else if (filter.spent) {
      if (filter.search.length > 0) {
        transactionsFilter = transactions.filter((transaction) => transaction.name.includes(filter.search) && transaction.type === "Gasto")
      } else {
        transactionsFilter = transactions.filter((transaction) => transaction.type === "Gasto")
      }
    }

    setTransactionsFilter(transactionsFilter)
  }

  // Variables de alertas
  const [show, setShow] = useState(null)
  const [variant, setVariant] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    setFinalBalance(initialBalance)
  }, [initialBalance])

  useEffect(() => {
    setFinalBalance(calcularSaldoFinal)
    setFilterSearch()
  }, [initialBalance, transactions, filter])

  return (
    <div className={style.container}>
      <div className={style.appwrapper}>
        <div>
          <Balance initialBalance={initialBalance} setInitialBalance={setInitialBalance} finalBalance={finalBalance} />
        </div>

        <div className={style.body}>
          <div className={style.width50}>
            <div className={style.form}>
              <div className={style.containerDetail}>
                <div className={style.header}>
                  <span>Registro</span>
                </div>
                <div className={style.formContainer}>
                  <Form form={form} setForm={setForm} finalBalance={finalBalance} transactions={transactions} setTransactions={setTransactions} edit={edit} setEdit={setEdit} setshow={setShow} setVariant={setVariant} setMessage={setMessage} />
                </div>
              </div>
            </div>
          </div>

          <div className={style.margin}>
            <div className={style.form}>
              <div className={style.containerDetail}>
                <div className={style.header}>
                  <span>Listado Movimientos</span>
                  <span className={style.badge}>{transactionsFilter.length}</span>
                </div>
                <div>
                  <Filter filter={filter} setFilter={setFilter} />
                </div>
                <div className={style.formContainer} style={{ width: '98%' }}>
                  <TransactionList transactions={transactions} transactionsFilter={transactionsFilter} setTransactions={setTransactions} setEdit={setEdit} setshow={setShow} setVariant={setVariant} setMessage={setMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Alert show={show} setshow={setShow} variant={variant} message={message} />
      </div>
    </div>
  )
}

export default App
