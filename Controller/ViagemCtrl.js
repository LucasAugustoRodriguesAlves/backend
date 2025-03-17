import Viagem from '../Model/Roma.js';

export default class ViagemCTRL {
  
  async gravar(requisicao, resposta) {
    resposta.type('application/json');

    if (requisicao.method !== "POST" || !requisicao.is('application/json')) {
      return resposta.status(400).json({
        status: false,
        mensagem: "Método não permitido ou viagem no formato JSON não fornecido!"
      });
    }

    const { nome, preco, ida, volta, partida, destino } = requisicao.body;

    if (!nome || !preco || !ida || !volta || !partida || !destino) {
      return resposta.status(400).json({
        status: false,
        mensagem: "Informe adequadamente todos os dados da viagem"
      });
    }

    try {
      const viagem = new Viagem(nome, preco, ida, volta, partida, destino);
      await viagem.gravar();
      resposta.status(200).json({
        status: true,
        mensagem: "Viagem gravada com sucesso!"
      });
    } catch (erro) {
      resposta.status(500).json({
        status: false,
        mensagem: erro.message
      });
    }
  }

  async atualizar(requisicao, resposta) {
    resposta.type('application/json');

    if (requisicao.method !== "PUT" || !requisicao.is('application/json')) {
      return resposta.status(400).json({
        status: false,
        mensagem: "Método não permitido ou viagem no formato JSON não fornecido!"
      });
    }

    const { nome, preco, ida, volta, partida, destino } = requisicao.body;

    if (!nome) {
      return resposta.status(400).json({
        status: false,
        mensagem: "Informe adequadamente todos os dados da viagem"
      });
    }

    try {
      const viagem = new Viagem(nome, preco, ida, volta, partida, destino);
      await viagem.alterar(); 
      resposta.status(200).json({
        status: true,
        mensagem: "Viagem atualizada com sucesso!"
      });
    } catch (erro) {
      resposta.status(500).json({
        status: false,
        mensagem: erro.message
      });
    }
  }

  async excluir(requisicao, resposta) {
    resposta.type('application/json');

    if (requisicao.method !== "DELETE" || !requisicao.is('application/json')) {
      return resposta.status(400).json({
        status: false,
        mensagem: "Método não permitido ou viagem no formato JSON não fornecido!"
      });
    }

    const { nome } = requisicao.body;

    if (!nome) {
      return resposta.status(400).json({
        status: false,
        mensagem: "Informe o nome da viagem para exclusão"
      });
    }

    try {
      const viagem = new Viagem(nome);
      await viagem.excluir();
      resposta.status(200).json({
        status: true,
        mensagem: "Viagem excluída com sucesso!"
      });
    } catch (erro) {
      resposta.status(500).json({
        status: false,
        mensagem: erro.message
      });
    }
  }

  async consultar(requisicao, resposta) {
    resposta.type('application/json');

    if (requisicao.method !== "GET") {
      return resposta.status(400).json({
        status: false,
        mensagem: "Método não permitido!"
      });
    }

    try {
      const viagem = new Viagem();
      const viagens = await viagem.consultar('');
      resposta.status(200).json(viagens);
    } catch (erro) {
      resposta.status(500).json({
        status: false,
        mensagem: erro.message
      });
    }
  }

  async consultarPeloNome(requisicao, resposta) {
    resposta.type('application/json');

    if (requisicao.method !== "GET") {
      return resposta.status(400).json({
        status: false,
        mensagem: "Método não permitido!"
      });
    }

    const nome = requisicao.params['nome'];

    if (!nome) {
      return resposta.status(400).json({
        status: false,
        mensagem: "Nome da viagem não informado!"
      });
    }

    try {
      const viagem = new Viagem();
      const viagens = await viagem.consultarNome(nome);
      resposta.status(200).json(viagens);
    } catch (erro) {
      resposta.status(500).json({
        status: false,
        mensagem: erro.message
      });
    }
  }
}