import { Link } from "react-router-dom"

function MenuR(){
    return <div>
        <nav class="nav justify-content-end" id="cabecera" style={{border: "hidden;"}}>
            <Link to={"/pantalla10"} classNameName="nav-link active" aria-current="page" style={{border: "hidden;"}}>Platos</Link>
            <Link to={"/pantalla13"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Lista Pedidos</Link>
            <Link to={"#"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Estado Pedidos</Link>
            <Link to={"/pantalla16"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Registrar Pedidos</Link>
            <Link to={"/pantalla9"} className="nav-link active" aria-current="page" style={{border: "hidden;"}}>Cerrar Sesion</Link>
        </nav>
    </div>
}

export default MenuR