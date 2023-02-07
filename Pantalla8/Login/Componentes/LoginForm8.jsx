import { useState } from "react"

function LoginForm8(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("USuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }
    return <form>
            <h1>Estado de pedido</h1>

        <div>
            <label className="form-label">DNI:</label>
            <input className="form-control" type="text"
                value={ usuario }
                onChange={ function(evt) { setUsuario(evt.target.value) } } />
        </div>
        <div>
            <label className="form-label">CODIGO DE VERIFICACION:</label>
            <input className="form-control" type="text"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } } />
        </div>
        <button className="btn btn-success mt-3 col-6" type="button"
            onClick={ butOnClick }>
            Login
        </button>
        <button className="btn btn-success mt-2" type="button"
            onClick={ butOnClick }>
            Solicitar Codigo de verificacion 
        </button>
        
    </form>
}

export default LoginForm8