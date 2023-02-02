import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import Mcdonald from "/img/mcdonald_logo.png"
import bembos from "/img/bembos_logo.jpg"
import kfc from "/img/KFC-Logo.png"
import hut from "/img/Pizza_Hut_Logo_3.png"
import pj from "/img/Papa-Johns-Pizza-Logo.png"
import mt from "/img/mamatomato_logo.jpg"
import norkys from "/img/Norkys-Logo.png"
import pardos from "/img/pardos_logo.jpg"
import lenia from "/img/leña_logo.png"
import rosa from "/img/rosa_logo.png"
import barrunto from "/img/barrunto_logo.jpg"
import embarcadero from "/img/embarcadero_logo.png"


function MainPageC(){
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(function() {
        if (location.state == null) {
            navigate("/lpc")
        }else {
            return <div>
                <ul classNameName="nav nav-tabs justify-content-end" id="cabecera" style="border: hidden;">
                    <li classNameName="nav-item">
                        <Link to={"/pw_2/mpc"} classNameName="nav-link active" aria-current="page" style="border: hidden;">Pagina Principal</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/pw_2/resenia"} className="nav-link active" aria-current="page" style="border: hidden;">Reseña</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/pw_2/carrito"} className="nav-link active" aria-current="page" style="border: hidden;">Carrito</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/pw_2/verPedido"} className="nav-link active" aria-current="page" style="border: hidden;">Ver Pedido</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link to={"/pw_2/lpc"} className="nav-link active" aria-current="page" style="border: hidden;">Cerrar Sesion</Link>
                    </li>
                </ul>
                <ul className="list-group" style="border: hidden;">
                    <li className="list-group-item" id="restaurantes1" style="border: hidden;">
                    <h5>Comida Rapida</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Mc'Donalds</h6>
                            <img src={Mcdonald} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Bembos</h6>
                            <img src={bembos} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">KFC</h6>
                            <img src={kfc} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>  
                    <li className="list-group-item" id="restaurantes2" style="border: hidden;">
                    <h5>Pastas y Pizzas</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Pizza Hut</h6>
                            <img src={hut} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Papa Johns</h6>
                            <img src={pj} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Mamma Tomato</h6>
                            <img src={mt} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li className="list-group-item" id="restaurantes3" style="border: hidden;">
                    <h5>Pollo</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Norkys</h6>
                            <img src={norkys} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Pardos Chiken</h6>
                            <img src={pardos} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">La Leña</h6>
                            <img src={lenia} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li className="list-group-item" id="restaurantes4" style="border: hidden;">
                    <h5>Pescado y Mariscos</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Rosa Nautica</h6>
                            <img src={rosa} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Mi Barrunto</h6>
                            <img src={barrunto} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style="width: 10rem;">
                            <div className="card-body">
                            <h6 className="card-title" style="text-align: center;">Embarcadero 41</h6>
                            <img src={embarcadero} className="card-img-top" style={"border-radius: 150px;"}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        }
    })
}

export default MainPageC