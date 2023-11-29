/* eslint-disable react/prop-types */
import { useState } from "react"
import { GlobalContext } from "./GlobalContext"

const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: 10,
        name: "Pedro"
    })

    const changeName = (name) => {
        setUser({ ...user, name })
    }

    return (
        <GlobalContext.Provider value={{ message: "Hola", active: true, user, changeName }} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider