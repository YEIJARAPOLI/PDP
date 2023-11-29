import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DashboardPage from "./pages/DashboardPage"
import UsersPage from "./pages/UsersPage"
import UserPage from "./pages/UserPage"
import NotFoundPage from "./pages/NotFoundPage"
import Menu from "./components/Menu"
import GlobalProvider from "./context/GlobalProvider"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard/*" element={<DashboardPage />}>
              <Route path="indicadores" element={<p>Indicadores</p>} />
              <Route path="metricas" element={<p>Metricas</p>} />
              <Route path="graficas" element={<p>Graficas</p>} />
            </Route>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App