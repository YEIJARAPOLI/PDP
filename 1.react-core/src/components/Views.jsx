import { useState } from "react";
import Button from "./Button";

/* eslint-disable no-unreachable */
const Views = (  ) => {
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("Hola mundo");

    // return <button onClick={ () => setAmount( amount + 1 ) }>Me gusta { amount }</button>;

    return (
        <Button title={ "Me gusta" } funcion={ setAmount } value={ amount } />
    )
}

export default Views;