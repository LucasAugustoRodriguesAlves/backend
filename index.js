import Roma from "./Model/Roma.js";

var viagem = new Roma(
  "Roma",
  "R$ 2.270.00",
  "03/05/2025",
  "05/05/2025",
  "Guarulhos",
  "Roma"
);

/*viagem
  .gravar()
  .then(() => {
    console.log("Viagem gravada com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro ao gravar a viagem: " + erro);
  });

viagem
  .consultar()
  .then((listaViagens) => {
    if (listaViagens.length === 0) {
      console.log("Nenhuma viagem encontrada.");
    } else {
      for (const viagem of listaViagens) {
        console.log(viagem.toJSON());
      }
    }
  })
  .catch((erro) => {
    console.log("Erro ao consultar as viagens: " + erro);
  });
*/
viagem.excluir()
  .then(() => {
    console.log("Viagem excluída com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro ao excluir a viagem: " + erro);
  });
  