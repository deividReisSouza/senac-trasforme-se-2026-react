import { useState, useEffect } from "react";
import { Link } from "react-router";


function Painel() {

    const [modal, setModal] = useState(false) //bolleam 
    const [users, setUsers] = useState([]) // vetor
    const [user, setUser] = useState({}) // objeto 
    const [logado, setLogado] = useState({})

    useEffect(() => {
        const logado = JSON.parse(localStorage.getItem('logado'))

        setLogado(logado)
    },
        [],);

    useEffect(() => {
        const usersTemp = JSON.parse(localStorage.getItem('users'))
        if (usersTemp) setUsers(usersTemp)

    }, [],);

    function handleRegister() {
        const newUsers = [...users, user]
        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))
        setUser({})
        setModal(false)
    }

    function updateU(pUser){
        setModal(true)
        setUser(pUser)
    };

    return (
        <>
            <h3>Olá {logado?.nome} seja Bem Vindo á tela de Gerenciamento de usúarios</h3>
            {modal &&
                (<div
                    className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/50 z-50">

                    <div className="relative max-w-md w-full p-5 bg-[#0093EA]/50 rounded-lg shadow-md flex-col">

                        <a id="btClose" className="bg-red-500 absolute top-0 right-0 px-4 py-3 rounded-full text-white hover:shadow-inner cursor-pointer " onClick={() => setModal(false)}>X</a>
                        <h2 className="text-white">Novo Usuário</h2>

                        <form className="flex-col flex text-white">
                            Nome:<input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })} className="bg-white text-black rounded-full p-2 " type="text" placeholder="Nome completo" />

                            Email:<input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="bg-white text-black rounded-full p-2 " type="email" placeholder="@gmail.com" />

                            Senha:<input  onChange={(e) => setUser({ ...user, senha: e.target.value })} className="bg-white text-black rounded-full p-2 " id="cPass" type="password" placeholder="senhA1@" />

                            Data de Nascimento:<input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} className="bg-white text-black rounded-full p-2 " id="cDate" type="date" />

                            <a onClick={handleRegister} className="mt-5 bg-[#FF893B] text-white text-center rounded-md py-2 cursor-pointer ">Salvar</a>
                        </form>

                    </div>
                </div>)
            }
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody className="text-white">
                    {users.map(u => (
                        <tr>
                            <td>{u.nome}</td>
                            <td>{u.email}</td>
                            <td>
                                <a className="cursor-pointer px-3 mx-4 hover:bg-green-300 shadow-md text-white rounded-full bg-green-500" onClick={()=>updateU(u)}>V</a>
                                <a className="cursor-pointer px-3 mx-4 hover:bg-red-300 shadow-md text-white rounded-full bg-red-500" onClick={()=>removeU(u)}>X</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a onClick={() => setModal(true)} className=" cursor-pointer rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0 hover:shadow-inner"> +
            </a>
        </>
    )
}
export default Painel;
