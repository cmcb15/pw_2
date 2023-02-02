import { Link } from "react-router-dom"

function Pantalla10(){
    return <div>
      <ul className="nav nav-tabs justify-content-end" id="cabecera" style="border: hidden;">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/pantalla10.html" id="activo" style="border: hidden;">Platos</a>
      <Link to={"platosRegistrados"} className="nav-link active" aria-current="page" style="border: hidden;">Cerrar Sesion</Link>
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

<section class="c1">
        <h1 id="titulo">Platos registrados</h1>
        <div></div>
        <div class="c1-tittle-section">
            <h2>Hamburguesas</h2>
        </div>
        <div class="c1 colum-4">
            <div className="card">
                <img src="/img/royal.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Royal</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/ham-a-lo-pobre.png" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">A lo pobre</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/hamburguesa1.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Milanesa con queso</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/clasica.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Clasica</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
        <div class="c1-tittle-section">
            <h2>Pizzas</h2>
        </div>
        <div class="c1 colum-4">
            <div class="card">
                <img src="/img/pizza-americana.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Americana</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/pizza-hawaiana.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Hawaiana</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/Peperoni.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Peperoni</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/Suprema.jpeg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Suprema</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
        <div class="c1-tittle-section">
            <h2>Pastas</h2>
        </div>
        <div class="c1 colum-4">
            <div class="card">
                <img src="/img/Spaguetti.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Spaguetti Bolognesa</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/lasagna.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Lasagna</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/tallarinesverdes.jpg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Tallarines Alfredo</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div class="card">
                <img src="/img/Suprema.jpeg" class="card-img-top" alt=""/>
                <div class="card-body">
                  <h5 class="card-title">Suprema</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <input type="submit" value="Registrar plato" class="btn btn-primary mt-4"/>
        </div>
        
        
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        
    </div>
}

export default Pantalla10