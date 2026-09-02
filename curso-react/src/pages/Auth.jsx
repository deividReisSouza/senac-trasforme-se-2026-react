import { useState } from "react";
import { Link } from "react-router";
//import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

function Auth() {

    const [doritos, setDoritos] = useState(0);

    function sub(){
        setDoritos(doritos - 1)
    }

    return (
        <div className="h-full flex intems-center min-h-screen">
            <div className="w-1/6 mx-auto my-auto p-5 bg-primary rounded-lg shadow-md flex flex-col">

                <Link to="/" className="mb-5 text-white text-center rounded-md">Voltar</Link>
                <div className="bg-red-500 mx-a" onClick={sub}>-</div>
                {doritos}
                <div className="bg-green-100 rounded-full p-2"onClick={() => setDoritos(doritos +1)}>+</div>

                <form className="flex text-white gap-[20px] text-center flex-col">
                    Email:<input id="cMailLogin" type="email" placeholder="@gmail.com" />

                    Senha:<input id="cPassLogin" type="password" placeholder="senhA1@" />

                    <Link id="formLogin" className=" cursor-pointer mt-5 bg-buttom text-white text-center rounded-md py-2">Entrar</Link>
                </form>
                <p id="rUserIncorrect"></p>
            </div>
        </div>

    )
}

export default Auth;