import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"


function MainPageC(){
    
    return <div>
                {/*<ul classNameName="nav nav-tabs justify-content-end" id="cabecera" style="border: hidden;">
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
        </ul>*/}
                <ul className="list-group" style={{width: "10rem"}}>
                    <li className="list-group-item" id="restaurantes1" style={{border: "hidden;"}}>
                    <h5>Comida Rapida</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Mc'Donalds</h6>
                            <img src="/img/mcdonald_logo.png" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Bembos</h6>
                            <img src="/img/bembos_logo.jpg" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>KFC</h6>
                            <img src="/img/KFC-Logo.png" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>  
                    <li className="list-group-item" id="restaurantes2" style={{border: "hidden;"}}>
                    <h5>Pastas y Pizzas</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Pizza Hut</h6>
                            <img src="/img/Pizza_Hut_Logo_3.png" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Papa Johns</h6>
                            <img src="/Papa-Johns-Pizza-Logo.png" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Mamma Tomato</h6>
                            <img src="/mamatomato_logo.jpg" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li className="list-group-item" id="restaurantes3" style={{border: "hidden;"}}>
                    <h5>Pollo</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Norkys</h6>
                            <img src="/Norkys-Logo.png" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Pardos Chiken</h6>
                            <img src="/img/pardos_logo.jpg" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>La Leña</h6>
                            <img src="/img/leña_logo.png" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li className="list-group-item" id="restaurantes4" style={{border: "hidden;"}}>
                    <h5>Pescado y Mariscos</h5>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Rosa Nautica</h6>
                            <img src="/img/rosa_logo.png" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Mi Barrunto</h6>
                            <img src="/img/barrunto_logo.jpg" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <Link to={"#"} className="btn btn-primary">Ver Menu</Link>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card" style={{width: "10rem"}}>
                            <div className="card-body">
                            <h6 className="card-title" style={{textAlign: "center;"}}>Embarcadero 41</h6>
                            <img src="/img/embarcadero_logo.png" className="card-img-top" style={{borderRadius:"150px;"}}/>
                            <a href="/pantalla4" className="btn btn-primary">Ver Menu</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>  
                </ul>
            </div>
    }
export default MainPageC