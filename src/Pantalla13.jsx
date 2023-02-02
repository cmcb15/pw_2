import { Link } from "react-router-dom"

function Pantalla13(){

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

<section className="c1">
        <h1 id="titulo">Pedidos realizados</h1>
        <div></div>
        <div className="c1-tittle-section">
            <h2>Hamburguesas</h2>
        </div>
        <div className="c1 colum-2 carta">
            <div className="plato-carta bg-light">
                <div className="img-plato-carta">
                    <img src="/img/royal.jpg" alt=""/>
                </div>
                <div className="descripcion">
                    <h4>Hamburguesa Royal</h4>
                    <p>Nombre: Lorem, ipsum.</p>
                    <p>Direccion: Lorem, ipsum dolor</p>
                    <p>Numero de telefono: Lorem, ipsum</p>
                    <p>Codigo de verificación: Lorem, ipsum dolor</p>
                </div>
                <div className="precio">
                    <span>S/.18</span>
                </div>
            </div>
            <div className="plato-carta bg-light">
                <div className="img-plato-carta">
                    <img src="/img/ham-a-lo-pobre.png" alt=""/>
                </div>
                <div className="descripcion">
                    <h4>Hamburguesa a lo pobre</h4>
                    <p>Nombre: Lorem, ipsum.</p>
                    <p>Direccion: Lorem, ipsum dolor</p>
                    <p>Numero de telefono: Lorem, ipsum</p>
                    <p>Codigo de verificación: Lorem, ipsum dolor</p>
                </div>
                <div className="precio">
                    <span>S/.22</span>
                </div>
            </div>
        </div>
        <div className="c1-tittle-section">
            <h2>Pizzas</h2>
        </div>
        <div className="c1 colum-2 carta">
            <div className="plato-carta bg-light">
                <div className="img-plato-carta">
                    <img src="/img/pizza-hawaiana.jpg" alt=""/>
                </div>
                <div className="descripcion">
                    <h4>Hawaiana</h4>
                    <p>Nombre: Lorem, ipsum.</p>
                    <p>Direccion: Lorem, ipsum dolor</p>
                    <p>Numero de telefono: Lorem, ipsum</p>
                    <p>Codigo de verificación: Lorem, ipsum dolor</p>
                </div>
                <div className="precio">
                    <span>S/.29.99</span>
                </div>
            </div>
            <div className="plato-carta bg-light">
                <div className="img-plato-carta">
                    <img src="/img/pizza-americana.jpg" alt=""/>
                </div>
                <div className="descripcion">
                    <h4>Americana</h4>
                    <p>Nombre: Lorem, ipsum.</p>
                    <p>Direccion: Lorem, ipsum dolor</p>
                    <p>Numero de telefono: Lorem, ipsum</p>
                    <p>Codigo de verificación: Lorem, ipsum dolor</p>
                </div>
                <div className="precio">
                    <span>S/.24.99</span>
                </div>
            </div>
        </div>
        <div className="c1-tittle-section">
            <h2>Pastas</h2>
        </div>
        <div className="c1 colum-2 carta">
            <div className="plato-carta bg-light">
                <div className="img-plato-carta">
                    <img src="/img/tallarines-salsa-alfredo.jpg" alt=""/>
                </div>
                <div className="descripcion">
                    <h4>Alfredo's</h4>
                    <p>Nombre: Lorem, ipsum.</p>
                    <p>Direccion: Lorem, ipsum dolor</p>
                    <p>Numero de telefono: Lorem, ipsum</p>
                    <p>Codigo de verificación: Lorem, ipsum dolor</p>
                </div>
                <div className="precio">
                    <span>S/.32.99</span>
                </div>
            </div>
            <div className="plato-carta bg-light">
                <div className="img-plato-carta">
                    <img src="/img/lasagna.jpg" alt=""/>
                </div>
                <div className="descripcion">
                    <h4>Lasagna</h4>
                    <p>Nombre: Lorem, ipsum.</p>
                    <p>Direccion: Lorem, ipsum dolor</p>
                    <p>Numero de telefono: Lorem, ipsum</p>
                    <p>Codigo de verificación: Lorem, ipsum dolor</p>
                </div>
                <div className="precio">
                    <span>S/.20.99</span>
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-center">
            <input type="submit" value="Registrar entrega" className="btn btn-primary mt-4"/>
        </div>
        
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    </div>

}

export default Pantalla13