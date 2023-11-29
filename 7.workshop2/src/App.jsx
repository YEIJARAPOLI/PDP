import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "@mui/material"
import ParkingProvider from "./context/ParkingProvider"

import Login from "./components/Login"
import Parking from "./components/Parking"
import Register from "./pages/Register"

const App = () => {
  return (
    <>
      <Container>
        <BrowserRouter>
          <ParkingProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Parking />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </ParkingProvider>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App