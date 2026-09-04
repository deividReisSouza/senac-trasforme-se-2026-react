import { useState } from "react";
import { Link, useNavigate } from "react-router";
//import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

function Auth() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [alert, setAlert] = useState("");

    const nav = useNavigate()

    function handleLogin(){
        const users = JSON.parse(localStorage.getItem('users'))
        let user = users.find(u =>{
            return u.email == email
        })
        if(!user){
            setAlert("Usuario não econtrado")
        }

        if(user.senha == pass){
            nav("/painel")
        }else{
            setAlert("Senha incorreta")
        }

    }

    return (
        <div className="w-full bg-white/50 z-50">
        <div className="h-full flex intems-center min-h-screen ">
            <div className="w-1/6 mx-auto my-auto p-5 bg-primary rounded-lg shadow-md flex flex-col">

                <Link to="/" className="mb-5 text-white text-center rounded-md text-top text-left">Voltar</Link>
                <div>{alert}</div>
                <form className="flex text-white gap-[20px] text-center flex-col">
                    <div className="text-left" >Email:</div><input className="bg-white text-black rounded-full p-2" id="cMailLogin" type="email" value={email} placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)} />

                    <div className="text-left" >Senha:</div><input className="bg-white text-black rounded-full p-2" id="cPassLogin" type="password" value={pass} placeholder="senhA1@" onChange={(e)=> setPass(e.target.value)} />

                    <a onClick={handleLogin} className=" cursor-pointer mt-5 bg-buttom text-white text-center rounded-md py-2 ">Entrar</a>
                </form>
                <p id="rUserIncorrect"></p>
            </div>
        </div>
        </div>

    )
}

export default Auth;