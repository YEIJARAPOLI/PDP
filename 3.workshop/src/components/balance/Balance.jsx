/* eslint-disable react/prop-types */
import style from "./Balance.module.css"

const Balance = ({ initialBalance, setInitialBalance, finalBalance }) => {

    return (
        <div className={style.header}>
            <div className={style.balance}>
                <span>Saldo inicial</span>
                <div className={style.input_wrapper}>
                    <input type="number" value={initialBalance} onChange={(e) => setInitialBalance(parseFloat(e.target.value))} />
                    <div className={style.input_icon}>
                        <ion-icon name="logo-usd"></ion-icon>
                    </div>
                </div>
            </div>
            <div className={style.balance}>
                <span>Saldo final</span>
                <div className={style.input_wrapper}>
                    <input type="number" value={finalBalance} readOnly />
                    <div className={style.input_icon}>
                        <ion-icon name="logo-usd"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balance