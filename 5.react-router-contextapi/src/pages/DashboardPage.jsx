import { Link, Outlet } from "react-router-dom"

const DashboardPage = () => {
  return (
    <div>
      <h1>DashboardPage</h1>
      <br />

      <ul>
        <li><Link to="indicadores">Indicadores</Link></li>
        <li><Link to="metricas">Metricas</Link></li>
        <li><Link to="graficas">Graficas</Link></li>
      </ul>
      <br />

      <Outlet />
    </div>
  )
}

export default DashboardPage