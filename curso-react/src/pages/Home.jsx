import { Link } from "react-router";

function Home() {
  return (
    <div className="bg-dark">
      <nav className="flex px-4 py-2 items-center bg-primary ">

        <a className="mr-2 p-2 text-white" href="example.html">Exemplo</a>
        <a className="mr-2 p-2 text-white" href="#about">Sobre</a>
        <a className="mr-2 p-2 text-white" href="#prices">Preços</a>
        <a className="mr-2 p-2 text-white" href="#features">Benefícios</a>
        <Link className="py-2 px-4 bg-secondary text-white rounded-x1 ml-auto" to="/login">Preencha</Link>
      </nav>
      <main>
        <section id="about" className="bg-secondary">
          <div className="max-w-lg mx-auto py-5 ">
            <h2 >
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
          <div className="max-w-lg mx-auto py-2 ">
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
          <div classNameName="max-w-lg mx-auto py-5">
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

      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Home;