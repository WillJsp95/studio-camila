import React, { useState } from "react";
import fotoiniciante from "../assets/fotoiniciante.jpg";
import fotointermediaria from "../assets/fotointermediaria.jpg";
import fotoavancada from "../assets/fotoavancada.jpg";

function Cursos() {
  const [acessoLiberado, setAcessoLiberado] = useState(false);
  const [senha, setSenha] = useState("");

  const senhaCorreta = "devcamila";

  if (!acessoLiberado) {
    return (
      <div className="bg-zinc-900 text-white min-h-screen flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Página em Manutenção</h1>
        <p className="text-gray-300 mb-4 text-center">
          Esta seção está em desenvolvimento. Em breve estará disponível!
        </p>
        <input
          type="password"
          placeholder="Digite a senha de desenvolvedor"
          className="px-4 py-2 text-black rounded-md mb-4 w-72"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          onClick={() => {
            if (senha === senhaCorreta) {
              setAcessoLiberado(true);
            } else {
              alert("Senha incorreta. Tente novamente.");
            }
          }}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md transition-colors"
        >
          Acessar como Dev
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-12">Cursos</h1>

      {/* Curso Iniciante */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-4">Curso Iniciante</h2>
          <p className="text-gray-300 leading-relaxed">
            Ideal para quem está começando no universo nail designer, 
            este curso foi desenvolvido para fornecer uma base sólida
            e descomplicada. Tem uma abordagem objetiva e prática 
            para dominar técnicas simples e eficazes, vamos trabalhar
            com os 4 formatos principais e você pode escolher
            entre três extensores, fibra de vidro, tips ou molde F1. 
            É um curso ideal para você que está dando 
            os primeiros passos para este mundo apaixonante.<br /><br/>
            Este curso possui de 6 a 8 horas de duração.<br />
            Material exclusivo para o curso.<br />
            Suporte diretamente com a instrutora. <br />
            1 tipo de extensor à escolha.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img 
            src={fotoiniciante} 
            alt="Curso Iniciante" 
            className="rounded-lg shadow-lg w-full max-w-md h-85 object-cover mx-auto"
          />
        </div>
      </div>

      {/* Curso Intermediário */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 p-4 order-2 md:order-1">
          <img 
            src={fotointermediaria} 
            alt="Curso Intermediário" 
            className="rounded-lg shadow-lg w-full max-w-md h-85 object-cover mx-auto"
          />
        </div>
        <div className="md:w-1/2 p-4 order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4">Curso Intermediário</h2>
          <p className="text-gray-300 leading-relaxed">
            Pensado para profissionais que já dominam o básico
            da esmaltação e da preparação da unha, este curso é o próximo
            passo rumo à excelência na área de nail designer. Neste 
            módulo, aprofundaremos mais a sua técnica.<br /><br />
            Este curso possui 16 horas de duração.<br />
            Material exclusivo para o curso.<br />
            Suporte com a instrutora.<br />
            3 tipos de extensores. 
          </p>
        </div>
      </div>

      {/* Curso Avançado */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-4">Curso Avançado</h2>
          <p className="text-gray-300 leading-relaxed">
            Destinado a profissionais que desejam elevar seu nível
            e se destacar no mercado, o curso avançado aborda técnicas 
            complexas, combinações criativas e aplicação de efeitos especiais.
            Este é um curso de aperfeiçoamento. Se você se sente estagnada(o),
            este é o curso perfeito para você.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img 
            src={fotoavancada} 
            alt="Curso Avançado" 
            className="rounded-lg shadow-lg w-full max-w-md h-90 object-cover mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Cursos;
