import { useState, useEffect } from "react";
import { Link } from "react-router";
import { supabase } from "../../utils/supabase";


function Painel() {

    const [modal, setModal] = useState(false) //bolleam 
    const [users, setUsers] = useState([]) // vetor
    const [user, setUser] = useState({}) // objeto 
    const [logado, setLogado] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)
    const [msg, setMsg] = useState(false)
    const [spiner, setSpiner] = useState('')

    useEffect(() => {
        const logado = JSON.parse(localStorage.getItem('logado'))

        setLogado(logado)
    },
        [],);

    useEffect(() => {
        loadUsers()
    }, [],);

    async function loadUsers() {

        const { data, error } = await supabase.from('profiles').select('*')
        if (error) {
            setMsg(error.message)
            return;
        }
        setUsers(data)
    }


    async function handleRegister() {
        setSpiner(true)
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: user.email,
            password: user.senha
        });
        if (authError) {
            setMsg(authError.message)
            setSpiner(false)
            return;
        }

        if (!authData) {
            setMsg("Não foi possível completar a ação, verifique sua conexão")
            setSpiner(false)
            return;
        }

        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.senha


        });
        const { error: profileError } = await supabase.from('profiles').insert({
            user_id: loginData.user.id,
            full_name: user.nome,
            birth: user.nascimento,
            cpf: user.cpf
        });

        if (profileError) {
            setMsg(profileError.message)
            setSpiner(false)
            return;
        }
        setSpiner(false)
        setMsg('Usuário Cadastrado')
    }
    function deleteUser(index) {
        const newUsers = users.filter((u, i) => {
            return i != index
        })
        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))


    }
    function updateU(indice) {
        setModal(true)
        setUser(users[indice])
        setIndex(indice)
    };

    return (
        <>
            <h3>Olá {logado?.nome} seja Bem Vindo á tela de Gerenciamento de usúarios</h3>
            {modal &&
                (<div
                    className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/50 z-50">

                    <div className="relative max-w-md w-full p-5 bg-[#0093EA]/50 rounded-lg shadow-md flex-col">

                        <a className="bg-red-500 absolute top-0 right-0 px-4 py-3 rounded-full text-white hover:shadow-inner cursor-pointer " onClick={() => { setModal(false); setIsEdit(false); setUser({}); setIndex(-1) }}>X</a>
                        <h2 className="text-white">Novo Usuário</h2>

                        {isEdit ? (
                            <form className="flex-col flex text-white">
                                Nome Completo:<input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })} className="bg-white text-black rounded-full p-2 " type="text" placeholder="Nome completo" />

                                Numero de telefone:<input value={user.tel} onChange={(e) => setUser({ ...user, tel: e.target.value })} className="bg-white text-black rounded-full p-2 " type="text" placeholder="(00) 00000-0000" />

                                Email:<input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="bg-white text-black rounded-full p-2 " type="email" placeholder="@gmail.com" />

                                Senha:<input onChange={(e) => setUser({ ...user, senha: e.target.value })} className="bg-white text-black rounded-full p-2 " id="cPass" type="password" placeholder="senhA1@" />

                                CPF:<input value={user.cpf} onChange={(e) => setUser({ ...user, cpf: e.target.value })} className="bg-white text-black rounded-full p-2 " type="text" placeholder="000.000.000-00" />

                                Data de Nascimento:<input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} className="bg-white text-black rounded-full p-2 " id="cDate" type="date" />
                               
                               Genêro:<input value={user.gener} onChange={(e) => setUser({ ...user, gener: e.target.value })} className="bg-white text-black rounded-full p-2 " id="cDate" type="date" />
                               
                                <a onClick={handleRegister} className="mt-5 bg-green-500 text-white text-center rounded-md py-2 cursor-pointer ">{spiner ? '...' : (index != -1 ? "Salvar" : "Cadastrar")}</a>
                                {msg}
                                {index != -1 && (
                                    <a onClick={() => setIsEdit(false)} className="mt-5 bg-red-500 text-black text-center rounded-md py-2 cursor-pointer ">Cancelar</a>
                                )}
                            </form>) : //else
                            (
                                <div>
                                    <p> <b> Nome: </b> {user.nome}</p>
                                    <p> <b> Email: </b> {user.email}</p>
                                    <p> <b> Senha: </b>  {user.senha}</p>
                                    <p> <b> Data de Nascimento: </b>  {user.nascimento}</p>
                                    <a onClick={() => setIsEdit(true)} className="mt-5 bg-[#FF893B] text-white text-center rounded-md py-2 cursor-pointer ">Editar</a>

                                </div>
                            )
                        }
                    </div>
                </div>)
            }
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody className="text-white">
                    {users.map((u, i) => (
                        <tr>
                            <td>{u.full_name}</td>
                            <td>{u.cpf}</td>
                            <td>{u.birth}</td>
                            <td>
                                <a className="cursor-pointer px-3 mx-4 hover:bg-green-300 shadow-md text-white rounded-full bg-green-500" onClick={() => updateU(i)}>V</a>
                                <a className="cursor-pointer px-3 mx-4 hover:bg-red-300 shadow-md text-white rounded-full bg-red-500" onClick={() => deleteUser(i)}>X</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a onClick={() => { setModal(true); setIsEdit(true) }} className=" cursor-pointer rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0 hover:shadow-inner"> +</a>
        </>
    )
}
export default Painel;
