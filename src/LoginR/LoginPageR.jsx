import { useNavigate } from "react-router-dom"
import LoginFormR from "./components/LoginFormR"

function LoginPageR(){
    const navigate = useNavigate()

    const loginHttp = async function(usuario, password){
        const response = await fetch("#", {
            method : "POST",
            body : JSON.stringify(
                {
                    usuario : usuario,
                    password : password
                }
            )
        })
        const data = await response.json()
        return data.error
    }

    const onLoginOk = async function(usuario, password){
        const error = await loginHttp(usuario, password)
        if (error === ""){
            const dataUsuario = {
                usuario : usuario,
                password : password
            }

            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/pantalla10", {
                state : {
                    usuario : usuario
                }
            })
        }else{
            console.error(error)
        }
    }

    /*
    const onLoginOk = function(
        usuario, password
    ){
        if(usuario === "admin"
            && password === "admin"){
                const dataUsuario = {
                    usuario: usuario,
                    password: password
                }

                const dataUsuarioJSON = JSON.stringify(dataUsuario)
                console.log(dataUsuario)
                console.log(dataUsuarioJSON)
                sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

                navigate("/Pantalla10", {
                    state: {
                        username: usuario
                    }
                })
            }
    }*/

    return <div className="container w-75 mt-5 rounded">
        <div className="row align-items-stretch">
            <div className="col">
                <h2 className="fw-bold text-center py-5">Login Restaurante</h2>
                <LoginFormR onLoginOk={onLoginOk}/>
            </div>
        </div>
    </div>

}

export default LoginPageR