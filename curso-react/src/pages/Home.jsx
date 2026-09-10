import { Link ,useNavigate} from "react-router";
import { useState } from "react";

function Home() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alert, setAlert] = useState("");
  const nav = useNavigate();
  const [modal, setModal] = useState(false);

  function handleLogin() {
    const users = JSON.parse(localStorage.getItem('users'))
    let user = users.find(u => {
      return u.email == email
    })
    if (!user) {
      setAlert("Usuario não econtrado")
    }

    if (user.senha == pass) {
      localStorage.setItem("logado")
      nav("/painel")
    } else {
      setAlert("Senha incorreta")
    }

  }
  return (
    <div className="bg-[#5278B5]">
      <nav className="flex px-4 py-2 items-center bg-primary ">

        <a className="mr-2 p-2 text-white" href="example.html">Exemplo</a>
        <a className="mr-2 p-2 text-white" href="#about">Sobre</a>
        <a className="mr-2 p-2 text-white" href="#prices">Preços</a>
        <a className="mr-2 p-2 text-white" href="#features">Benefícios</a>
        <a onClick={()=>setModal(true)} className="py-2 px-4 bg-secondary text-white rounded-x1 ml-auto">Preencha</a>
      </nav>
      <main>
        <section id="about" className="bg-secondary py-5 ">
          <div className="max-w-lg mx-auto py-5 ">
            <h2>
              Como a ProtesePay Muda Vidas?
            </h2>
            <div className="flex gap-8">
              <article>
                <h3>Nossa Missão</h3>
                <p>
                  Nossa missão é melhorar o acesso a todas as pessoas q necessitam da protese para atividades
                  basicas
                  como fazer tarefas domesticas, trabalhar, dirigir entre outras necessidades mais
                  complexas.
                </p>
              </article>
              <article>
                <h3>Confiança</h3>
                <p>
                  <b>Sempre</b> atenderemos a todos os casos.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="prices">
          <div className="max-w-lg mx-auto py-5">
            <h2>
              Nossos Preços R$
            </h2>
            <p>
              Buscamos sempre as menores taxas possiveis para sempre <b>Alcançar</b> os publicos mais fragilizados
              possiveis.
              Aqui sempre temos a sua solução com parcelamentos por boletos ou financiamentos extremamente
              justos.
              Impossivel ficar de fora dessa oportunidade preencha o formulario para <b>Começar</b>
            </p>
          </div>
        </section>
        <section id="features">
          <div className="max-w-lg mx-auto py-5">
            <h2>
              Como você ser um beneficiario?
            </h2>
            <p>
              Mande seus dados no formulario e tenha a resposta em menos de <b>12horas</b> com nossos bot's para
              facilitar seu atendimento.
              Sempre tentaremos te entregar as melhores propostas possiveis para que você tenha uma mudança de
              vida
            </p>
          </div>
        </section>
      </main >
      {modal && 
      (<div className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/50 z-50">
          <div className="w-full bg-white/50 z-50">
            <div className="h-full flex intems-center min-h-screen ">
              <div className="w-1/6 mx-auto my-auto p-5 bg-primary rounded-lg shadow-md flex flex-col">

                <Link to="/" className="mb-5 text-white text-center rounded-md text-top text-left">Voltar</Link>
                <div>{alert}</div>
                <form className="flex text-white gap-[20px] text-center flex-col">
                  <div className="text-left" >Email:</div><input className="bg-white text-black rounded-full p-2" id="cMailLogin" type="email" value={email} placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)} />

                  <div className="text-left" >Senha:</div><input className="bg-white text-black rounded-full p-2" id="cPassLogin" type="password" value={pass} placeholder="senhA1@" onChange={(e) => setPass(e.target.value)} />

                  <a onClick={handleLogin} className=" cursor-pointer mt-5 bg-buttom text-white text-center rounded-md py-2 ">Entrar</a>
                </form>
                <p id="rUserIncorrect"></p>
              </div>
            </div>
          </div>
        </div>)
        }
      <footer>
      </footer>
    </div>
  )
}
export default Home;