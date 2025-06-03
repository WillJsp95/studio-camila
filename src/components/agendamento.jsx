import React from "react";
import ChibiAssistant from "../components/ChibiAssistant";

function Agendamento() {
  const handleAgendar = () => {
    window.open("https://client.tuaagenda.com/c/StudioCamilaVieira2", "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4 relative">
      {/* Conteúdo centralizado */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Agende seu horário
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Clique no botão abaixo para ser redirecionada ao nosso sistema de agendamentos.
        </p>
        <button
          onClick={handleAgendar}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition transform hover:scale-105"
        >
          Agendar agora
        </button>
      </div>

      {/* Assistente no canto inferior direito */}
      <div className="fixed bottom-4 right-4 z-50">
        <ChibiAssistant />
      </div>
    </div>
  );
}

export default Agendamento;
