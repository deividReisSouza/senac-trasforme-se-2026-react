import { Link } from "react-router";
//import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

function Auth() {
    return (
        <div classNameName="h-full flex">
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-secundary bg-black-50 items-center justify-center shadow-md column flex text-white ">
                <div className="relative max-w-md w-full p-5 bg-primary rounded-lg shadow-md flex column">
                    <Link to="/" className="mb-5 text-white">Voltar</Link>

                    <form className="flex flex-col text-white gap=[20]">
                        Email:<input id="cMailLogin" type="email" placeholder="@gmail.com" />

                        Senha:<input id="cPassLogin" type="password" placeholder="senhA1@" />

                        <Link id="formLogin" className=" cursor-pointer mt-5 bg-buttom text-white text-center rounded-md py-2">Entrar</Link>
                    </form>
                    <p id="rUserIncorrect"></p>
                </div>
            </div>
        </div>
    )
}

export default Auth;