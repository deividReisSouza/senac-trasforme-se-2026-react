import { useState } from "react";
import { Link } from "react-router";
//import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

function Auth() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className="w-full bg-orange-300">
        <div className="h-full flex intems-center min-h-screen ">
            <div className="w-1/6 mx-auto my-auto p-5 bg-primary rounded-lg shadow-md flex flex-col">

                <Link to="/" className="mb-5 text-white text-center rounded-md">Voltar</Link>

                <form className="flex text-white gap-[20px] text-center flex-col">
                    Email:<input id="cMailLogin" type="email" value={email} placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)} />

                    Senha:<input id="cPassLogin" type="password" value={pass} placeholder="senhA1@" onChange={(e)=> setPass(e.target.value)} />

                    <Link id="formLogin" className=" cursor-pointer mt-5 bg-buttom text-white text-center rounded-md py-2">Entrar</Link>
                </form>
                <p id="rUserIncorrect"></p>
            </div>
        </div>
        </div>

    )
}

export default Auth;