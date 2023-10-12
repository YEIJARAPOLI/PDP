import uuid4 from "uuid4"
//import $ from "jquery"
import style from './Form.module.css'
import { useEffect } from "react"

/* eslint-disable react/prop-types */
const Form = ({ form, setForm, transactions, setTransactions, edit, setEdit }) => {

    const handlerType = (e) => {
        setForm({ ...form, type: e.target.value })
    }
    const handlerName = (e) => {
        setForm({ ...form, name: e.target.value })
    }
    const handlerQty = (e) => {
        setForm({ ...form, qty: parseFloat(e.target.value) })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (edit) {
            setTransactions(transactions.map((transaction) => transaction.id === edit.id ? {
                ...edit, type: form.type, name: form.name, qty: form.qty
            } : transaction))
        } else {
            const newTransaction = {
                id: uuid4(),
                type: form.type,
                name: form.name,
                qty: form.qty
            }

            setTransactions([...transactions, newTransaction])
        }

        setForm({ id: null, type: "", name: "", qty: 0 })
        setEdit(null)
    }

    useEffect(() => {
        if (edit) setForm(edit)
        else setForm({ id: null, type: "", name: "", qty: 0 })
    }, [edit])

    return (
        <div>
            {
                /*$("#qty").on({
                    "keyup": function (event) {
                        $(event.target).val(function (index, value) {
                            return value.replace(/\D/g, "")
                                .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")
                        })
                    }
                })*/
            }
            <form onSubmit={onSubmit}>
                <div className={style.container}>
                    <div className={style.span}>Tipo Movimiento: </div>
                    <div className={style.select_wrapper}>
                        <select value={form.type} className={style.select} onChange={handlerType}>
                            <option value="">Seleccione</option>
                            <option value="Gasto">Gasto</option>
                            <option value="Ingreso">Ingreso</option>
                        </select>
                        <div className={style.input_icon}>
                            <ion-icon name="card-sharp"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.span}>Nombre: </div>
                    <div className={style.input_wrapper}>
                        <input type="text" className={style.input} value={form.name} onChange={handlerName} />
                        <div className={style.input_icon}>
                            <ion-icon name="document-text-sharp"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.span}>Cantidad: </div>
                    <div className={style.input_wrapper}>
                        <input type="number" className={style.input} value={form.qty} onChange={handlerQty} id="qty" />
                        <div className={style.input_icon}>
                            <ion-icon name="logo-usd"></ion-icon>
                        </div>
                    </div>
                </div>

                <div className={style.container}>
                    <button type="submit" className={style.secundary}>Cancelar</button>
                    <button type="submit" className={style.primary}>
                        {
                            edit ? "Editar Movimiento" : "Agregar Movimiento"
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form