const chatFlow = {
  inicio: {
    mensagens: [
      "Oi gata! Em que posso te ajudar hoje? 💖",
    ],
    opcoes: [
      {
        texto: "📍 Qual o endereço?",
        resposta: "Estamos na Rua Saldanha da Gama, 668 – Sala 4. Atendimento com hora marcada 💅",
      },
      {
        texto: "💅 Quais serviços você oferece?",
        resposta: "Alongamento em fibra de vidro, esmaltação em gel. Quer saber mais sobre algum deles?",
        proxima: "servicos",
      },
      {
        texto: "🕒 Quero agendar um horário",
        resposta: "Claro! Te levo direto pro agendamento 💖",
        acao: () => window.open("https://client.tuaagenda.com/c/StudioCamilaVieira2", "_blank"),
      },
      {
        texto: "💬 Falar com a Camila no WhatsApp",
        resposta: "Te redirecionando pro WhatsApp 😍",
        acao: () => {
          const numero = "5551982066508";
          const msg = encodeURIComponent("Oi Camila! Vim pelo site e quero saber mais 😊");
          window.open(`https://wa.me/${numero}?text=${msg}`, "_blank");
        },
      },
    ],
  },

  servicos: {
    mensagens: [
      "Esses são nossos serviços principais:",
    ],
    opcoes: [
      {
        texto: "💅 Alongamento",
        resposta: "Trabalhamos com fibra de vidro. Resultado natural e duradouro!",
      },
      {
        texto: "Manutenção",
        resposta: "As manutençoes devem ser feitas a cada 15 dias, caso passe deste praso o custo pode ser maior! Consulte nosso valores.",
      },
      {
        texto: "💅 Esmaltação",
        resposta: "Esmaltação em gel, francesa ou artística — você escolhe, a beleza é garantida!",
      },
      {
        
        texto: "Voltar ao início",
        resposta: "Tudo bem, vamos voltar! 😊",
        proxima: "inicio",
      },
    ],
  },
};

export default chatFlow;
