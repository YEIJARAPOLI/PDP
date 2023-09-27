import { useState } from "react"

const FormControlado = () => {

    const [form, setForm] = useState( {
        email: "",
        password: ""
    } )

    const handlerInputEmail = ( e ) => {
        setForm({ ...form, email: e.target.value })
    }
    const handlerInputPassword = ( e ) => {
        setForm({ ...form, password: e.target.value })
    }

    return (
        <>
            <input type="text" name="email" placeholder="Ingrese Email" autoComplete="off" value={ form.email } onChange={ handlerInputEmail } />
            <input type="password" name="password" placeholder="Ingrese Password" autoComplete="off" value={ form.password } onChange={ handlerInputPassword } />
        </>
    )
}

export default FormControlado