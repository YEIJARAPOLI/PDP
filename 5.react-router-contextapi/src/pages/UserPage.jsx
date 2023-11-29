import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"

const UserPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { message, user, changeName } = useContext(GlobalContext)

  const handler = () => {
    navigate("/", { replace: true })
  }

  const handlerChangeName = () => {
    changeName("Ana")
  }

  return (
    <div>
      <h1>User Information</h1>
      <br />

      <h3>User Id: {id} </h3>
      <br />
      <h5>User Name: {user.name} </h5>
      <button onClick={handlerChangeName}>Change name</button>
      <br />
      <h5>Message: {message} </h5>
      <br />

      <button onClick={handler}>Home</button>
    </div>
  )
}

export default UserPage