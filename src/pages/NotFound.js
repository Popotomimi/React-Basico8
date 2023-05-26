import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div>
        <h1>Erro 404, Pagina não encontrada!!!</h1>
        <Link to="http://localhost:3001">Volta ai pai</Link>
    </div>
  )
}

export default NotFound