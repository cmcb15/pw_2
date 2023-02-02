import { Link } from "react-router-dom"

function Pantalla7(){
    return <div>
        <ul classNameName="nav nav-tabs justify-content-end" id="cabecera" style="border: hidden;">
                    <li classNameName="nav-item">
                        <Link to={"/mpc"} classNameName="nav-link active" aria-current="page" style="border: hidden;">Pagina Principal</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/resenia"} className="nav-link active" aria-current="page" style="border: hidden;">Reseña</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/carrito"} className="nav-link active" aria-current="page" style="border: hidden;">Carrito</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/verPedido"} className="nav-link active" aria-current="page" style="border: hidden;">Ver Pedido</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/lpc"} className="nav-link active" aria-current="page" style="border: hidden;">Cerrar Sesion</Link>
                    </li>
                </ul>
        <div className="d-flex justify-content-center">
            <h1>Realizar pedido</h1>
        </div>
        <div className="container pt-4">
            <div className="d-flex justify-content-center">
                <strong><h4>Datos del cliente</h4></strong>
            </div>
            <form className="row g-3">
                <div className="col-12">
                    <label for="inputAddress" className="form-label"><strong><h4>Nombre</h4></strong></label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Nombres y Apellidos"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"><strong><h4>Número de telefono</h4></strong></label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Av, Distrito"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label"><strong><h4>Direccion</h4></strong></label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="+51 999 999 999"/>
                </div>
                    <div className="d-flex justify-content-center">
                    <strong><h4>Metodo de pago</h4></strong>
                </div>
                <div>
                    <div className="form-check d-flex justify-content-around">
                        <div><input type="radio" name="metodo" value="a"/><strong>Efectivo</strong></div>
                        <div><input type="radio" name="metodo" value="e"/><strong>Tarjeta</strong></div>
                        <div><input type="radio" name="metodo" value="i"/><strong>Yape</strong></div>  
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <input type="submit" value="Continuar" className="btn btn-primary mt-4"/>
                </div>
            </form>
        </div>

    </div>
}

export default Pantalla7