import uuid4 from "uuid4"
import Select from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import style from './Form.module.css'
import { useEffect } from "react"

/* eslint-disable react/prop-types */
const Form = ({ form, setForm, finalBalance, transactions, setTransactions, edit, setEdit, setshow, setVariant, setMessage }) => {

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

        if (form.type.length <= 0) {
            sendAlert({ type: "error", message: "Debe seleccionar el Tipo de Movimiento" })
            return
        }

        if (form.name.length <= 0) {
            sendAlert({ type: "error", message: "Debe ingresar el Nombre del movimiento" })
            return
        }

        if (form.qty <= 0) {
            sendAlert({ type: "error", message: "Debe ingresar una Cantidad mayor a 0" })
            return
        }

        if((form.qty > finalBalance) && form.type == "Gasto") {
            sendAlert({ type: "error", message: "La cantidad ingresada es mayor al saldo final" })
            return
        }

        if (edit) {
            setTransactions(transactions.map((transaction) => transaction.id === edit.id ? {
                ...edit, type: form.type, name: form.name, qty: form.qty
            } : transaction))

            sendAlert({ type: "success", message: "Movimiento editado con éxito" })
        } else {
            const newTransaction = {
                id: uuid4(),
                type: form.type,
                name: form.name,
                qty: form.qty
            }

            setTransactions([...transactions, newTransaction])
            sendAlert({ type: "success", message: "Movimiento agregado con éxito" })
        }

        setForm({ id: null, type: form.type, name: "", qty: 0 })
        setEdit(null)
    }

    const sendAlert = ({ message, type }) => {
        if (type === "error") {
            setVariant("danger")
        } else {
            setVariant("success")
        }

        setMessage(message)
        setshow(true)
    }

    useEffect(() => {
        if (edit) setForm(edit)
        else setForm({ id: null, type: form.type, name: "", qty: 0 })
    }, [edit])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className={style.container}>
                    <div className={style.span}>Tipo Movimiento: </div>
                    <div className={style.select_wrapper}>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">
                                <ion-icon name="card-sharp"></ion-icon>
                            </InputGroup.Text>
                            <Select.Select value={form.type} onChange={handlerType}>
                                <option value="">Seleccione</option>
                                <option value="Gasto">Gasto</option>
                                <option value="Ingreso">Ingreso</option>
                            </Select.Select>
                        </InputGroup>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.span} style={{ width: '61%' }}>Nombre: </div>
                    <div className={style.input_wrapper}>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">
                                <ion-icon name="document-text-sharp"></ion-icon>
                            </InputGroup.Text>
                            <Select.Control value={form.name} onChange={handlerName} />
                        </InputGroup>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.span} style={{ width: '61%' }}>Cantidad: </div>
                    <div className={style.input_wrapper}>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">
                                <ion-icon name="logo-usd"></ion-icon>
                            </InputGroup.Text>
                            <Select.Control value={form.qty} onChange={handlerQty} />
                        </InputGroup>
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