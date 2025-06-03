import React, { useState } from "react";
import chibiImg from "../assets/chibi.png";
import chatFlow from "../data/ChatFlow";

const ChibiAssistant = () => {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState([]);
  const [etapa, setEtapa] = useState("inicio");
  const [digitando, setDigitando] = useState(false);

  const enviarMensagem = (opcao) => {
    // Criar instâncias locais para os áudios e tocar diretamente
    const audioSend = new Audio("/sounds/send.mp3");
    const audioTyping = new Audio("/sounds/typing.mp3");
    const audioReply = new Audio("/sounds/reply.mp3");
    const audioLaugh = new Audio("/sounds/mila-laugh.mp3");

    audioSend.play();

    setMensagens([{ remetente: "user", texto: opcao.texto }]);
    setDigitando(true);

    // tocar som digitando em loop
    audioTyping.loop = true;
    audioTyping.play();

    setTimeout(() => {
      setDigitando(false);
      audioTyping.pause();

      audioReply.play();

      setTimeout(() => {
        audioLaugh.play();
      }, 500);

      setMensagens([
        { remetente: "user", texto: opcao.texto },
        { remetente: "mila", texto: opcao.resposta },
      ]);

      if (opcao.acao) {
        setTimeout(opcao.acao, 300);
      }

      if (opcao.proxima) {
        setTimeout(() => setEtapa(opcao.proxima), 300);
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <img
        src={chibiImg}
        alt="Assistente Mila"
        className="w-24 h-24 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => setAberto(!aberto)}
      />

      {aberto && (
        <div className="w-80 bg-zinc-900 text-white p-4 rounded-lg shadow-xl mt-2 max-h-96 overflow-y-auto space-y-3">
          {chatFlow[etapa].mensagens.map((msg, i) => (
            <div
              key={`intro-${i}`}
              className="bg-zinc-800 px-4 py-2 rounded-lg text-sm"
            >
              {msg}
            </div>
          ))}

          {mensagens.map((msg, i) => (
            <div
              key={i}
              className={`text-sm px-4 py-2 rounded-lg ${
                msg.remetente === "user"
                  ? "bg-pink-600 text-white text-right"
                  : "bg-zinc-700 text-white"
              }`}
            >
              {msg.texto}
            </div>
          ))}

          {digitando && (
            <div className="text-sm px-4 py-2 rounded-lg bg-zinc-700 text-white italic animate-pulse">
              Mila está digitando...
            </div>
          )}

          <div className="space-y-2 pt-2">
            {chatFlow[etapa].opcoes.map((opcao, i) => (
              <button
                key={i}
                onClick={() => enviarMensagem(opcao)}
                className="w-full text-left text-sm font-semibold text-pink-400 hover:text-pink-300 transition"
              >
                {opcao.texto}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChibiAssistant;
