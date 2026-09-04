import { useState } from "react";
import { Link } from "react-router";


function Painel() {

    const [modal, setModal] = useState(false) //bolleam 
    const [users, setUsers] = useState([]) // vetor
    const [user, setUser] = useState({}) // objeto 

    function handleRegister(){
        const newUsers = [...users,user]
        setUsers(newUsers)
        localStorage.setItem('users',JSON.stringify(newUsers))
        setUser({})
        setModal(false)
    }

    return (
        <>
            <h3 id="oi"></h3>
            {modal &&
                (<div
                    className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/50 z-50">

                    <div className="relative max-w-md w-full p-5 bg-[#0093EA]/50 rounded-lg shadow-md flex-col">

                        <a id="btClose"className="bg-red-500 absolute top-0 right-0 px-4 py-3 rounded-full text-white hover:shadow-inner cursor-pointer " onClick={() => setModal(false)}>X</a>
                        <h2 className="text-white">Novo Usuário</h2>

                        <form className="flex-col flex text-white">
                            Nome:<input onChange={(e) => setUser({ ...user, nome: e.target.value })} className="bg-white text-black rounded-full p-2 " type="text" placeholder="Nome completo" />

                            Email:<input onChange={(e) => setUser({ ...user, email: e.target.value })} className="bg-white text-black rounded-full p-2 " type="email" placeholder="@gmail.com" />

                            Senha:<input onChange={(e) => setUser({ ...user, senha: e.target.value })} className="bg-white text-black rounded-full p-2 " id="cPass" type="password" placeholder="senhA1@" />

                            Data de Nascimento:<input onChange={(e) => setUser({ ...user, nascimento: e.target.value })} className="bg-white text-black rounded-full p-2 " id="cDate" type="date" />
                            <a onClick={handleRegister} className="mt-5 bg-[#FF893B] text-white text-center rounded-md py-2 cursor-pointer ">Salvar</a>
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
            <a onClick={() => setModal(true)} className=" cursor-pointer rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0 hover:shadow-inner"> +
            </a>
        </>
    )
}
export default Painel;
