import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import './Styles/pantalla10.css';

function Pantalla10(){
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(function() {
    if (location.state == null) {
        navigate("/pw_2/lpc")
    }else {
    return <div>
      <ul className="nav nav-tabs justify-content-end" id="cabecera" style="border: hidden;">
    <li className="nav-item">
      <Link to={"/pw_2/platosRegistrados"} className="nav-link active" aria-current="page" style="border: hidden;">Platos</Link>
    </li>
    <li className="nav-item">
      <Link to={"/pw_2/pedidoR"} className="nav-link active" aria-current="page" style="border: hidden;">Lista Pedidos</Link>
    </li>
    <li className="nav-item">
      <Link to={"#"} className="nav-link active" aria-current="page" style="border: hidden;">Estado Pedido</Link>
    </li>
    <li className="nav-item">
      <Link to={"/pw_2/registrarPedido"} className="nav-link active" aria-current="page" style="border: hidden;">Registrar Pedido</Link>
    </li>
    <li className="nav-item">
        <Link to={"/pw_2/lpr"} className="nav-link active" aria-current="page" style="border: hidden;">Cerrar Sesion</Link>
    </li>
</ul>

<section className="c1">
        <h1 id="titulo">Platos registrados</h1>
        <div></div>
        <div className="c1-tittle-section">
            <h2>Hamburguesas</h2>
        </div>
        <div className="c1 colum-4">
            <div className="card">
                <img src="/img/royal.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Royal</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/ham-a-lo-pobre.png" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">A lo pobre</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/hamburguesa1.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Milanesa con queso</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/clasica.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Clasica</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
        <div className="c1-tittle-section">
            <h2>Pizzas</h2>
        </div>
        <div className="c1 colum-4">
            <div className="card">
                <img src="/img/pizza-americana.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Americana</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/pizza-hawaiana.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Hawaiana</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/Peperoni.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Peperoni</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/Suprema.jpeg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Suprema</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
        <div className="c1-tittle-section">
            <h2>Pastas</h2>
        </div>
        <div className="c1 colum-4">
            <div className="card">
                <img src="/img/Spaguetti.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Spaguetti Bolognesa</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/lasagna.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Lasagna</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/tallarinesverdes.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Tallarines Alfredo</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                <img src="/img/Suprema.jpeg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Suprema</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <input type="submit" value="Registrar plato" className="btn btn-primary mt-4"/>
        </div>
        
        
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        
    </div>
    }
  })
}

export default Pantalla10