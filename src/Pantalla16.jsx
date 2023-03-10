import { Link } from "react-router-dom"
function Pantalla16(){

    return <div>
        <ul className="nav nav-tabs justify-content-end" id="cabecera" style="border: hidden;">
    <li className="nav-item">
      <Link to={"/platosRegistrados"} className="nav-link active" aria-current="page" style="border: hidden;">Platos</Link>
    </li>
    <li className="nav-item">
      <Link to={"/pedidoR"} className="nav-link active" aria-current="page" style="border: hidden;">Lista Pedidos</Link>
    </li>
    <li className="nav-item">
      <Link to={"#"} className="nav-link active" aria-current="page" style="border: hidden;">Estado Pedido</Link>
    </li>
    <li className="nav-item">
      <Link to={"/registrarPedido"} className="nav-link active" aria-current="page" style="border: hidden;">Registrar Pedido</Link>
    </li>
    <li className="nav-item">
        <Link to={"/lpr"} className="nav-link active" aria-current="page" style="border: hidden;">Cerrar Sesion</Link>
    </li>
</ul>

        <div class="d-flex justify-content-center">
            <h1>Registar entrega de pedido</h1>
        </div>

        <div class="container pt-4 d-flex justify-content-center">
            <form class="">
                <div class="col-12">
                    <label for="inputAddress" class="form-label d-flex justify-content-center"><h4><strong>Codigo de verificación</strong></h4></label>
                    <input type="text" class="form-control" id="inputAddress" />
                </div>

                <div class="container pt-4"></div>
                <div class="a card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><strong>Hamburguesa Royal</strong></h5>
                        <br />
                        <p class="card-text"><strong>Nombre: </strong>Lorem, ipsum.</p>
                        <p class="card-text"><strong>Direccion: </strong>Lorem, ipsum dolor</p>
                        <p class="card-text"><strong>Numero de telefono: </strong>Lorem, ipsum</p>
                        <p class="card-text"><strong>Codigo de verificación: </strong>Lorem, ipsum dolor</p>
                        <br />
                        <a href="#" class="btn btn-primary">Registrar entrega</a>
                    </div>
                </div>
            </form>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>

    </div>

}

export default Pantalla16