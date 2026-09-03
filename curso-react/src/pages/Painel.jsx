import { useState } from "react";
import { Link } from "react-router";


function Painel() {

    const [modal, setModal] = useState(false)

    return (
        <>
            <h3 id="oi"></h3>
            { modal &&
                (<div 
                className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center text-white bg-black/50 z-50">

                    <div className="relative max-w-md w-full p-5 bg-primary rounded-lg shadow-md flex-col">

                        <a id="btClose"
                            className="bg-red-500 absolute top-0 right-0 px-4 py-3 rounded-full text-white hover:shadow-inner cursor-pointer " onClick={()=> setModal(false)}>X</a>
                        <h2 className="text-white">Novo Usuário</h2>
                        <form className="flex-col flex">
                            Nome:<input className="rounded-full text-black" id="cName" type="text" placeholder="Nome completo" />

                            Email:<input className="rounded-full text-black" id="cMail" type="email" placeholder="@gmail.com" />

                            Senha:<input className="rounded-full text-black" id="cPass" type="password" placeholder="senhA1@" />

                            Data de Nascimento:<input  className="rounded-full text-black" id="cDate" type="date" />
                            <a id="formRegister" className="mt-5 bg-secondary text-white text-center rounded-md py-2 cursor-pointer ">Salvar</a>
                        </form>

                    </div>
                </div>)
            }
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </thead>

                <tbody id="listaUsers" className="bg-primary text-white">

                </tbody>
            </table>
            <a onClick={()=> setModal(true) } className=" cursor-pointer rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0 hover:shadow-inner"> +
            </a>
        </>
    )
}
export default Painel;
