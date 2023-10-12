/* eslint-disable react/prop-types */
import style from "./TransactionItem.module.css"

const TransactionItem = ({ transaction, deleteTransaction, setEdit }) => {
    return (
        <li className={style.list}>
            <div className={style.icon} onClick={() => deleteTransaction(transaction)}>
                <ion-icon name="trash-sharp"></ion-icon>
            </div>
            <div className={style.icon} onClick={() => setEdit(transaction)}>
                <ion-icon name="pencil-sharp"></ion-icon>
            </div>
            <div className={style.name}>
                {transaction.name}
            </div>
            <div className={`${style.type} ${transaction.type == "Gasto" ? style.spent : style.income}`}>
                {transaction.qty.toLocaleString('es-MX')}
            </div>
        </li>
    )
}

export default TransactionItem