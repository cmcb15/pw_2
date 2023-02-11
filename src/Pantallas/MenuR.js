import { Link } from "react-router-dom"

function MenuR(){
    return <div>
        <nav class="nav justify-content-end" id="cabecera" style={{border: "hidden;",backgroundColor:"black"}}>
            <Link to={"/pantalla10"} classNameName="nav-link active" aria-current="page" style={{border: "hidden;",color:"white"}}>Platos</Link>
            <Link to={"/pantalla13"} className="nav-link active" aria-current="page" style={{border: "hidden;",color:"white"}}>Lista Pedidos</Link>
            <Link to={"#"} className="nav-link active" aria-current="page" style={{border: "hidden;",color:"white"}}>Estado Pedidos</Link>
            <Link to={"/pantalla16"} className="nav-link active" aria-current="page" style={{border: "hidden;",color:"white"}}>Registrar Pedidos</Link>
            <Link to={"/pantalla9"} className="nav-link active" aria-current="page" style={{border: "hidden;",color:"white"}}>Cerrar Sesion</Link>
        </nav>
    </div>
}

export default MenuR