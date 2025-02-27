import conectar from "./conexao.js";
import Roma from "../Model/Roma.js";

export default class ViagemDB {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const conexao = await conectar();
      const sql = `
        CREATE TABLE IF NOT EXISTS viagem (
          nome VARCHAR(100) NOT NULL PRIMARY KEY,
          preco VARCHAR(100) NOT NULL,
          ida VARCHAR(100) NOT NULL,
          volta VARCHAR(100) NOT NULL,
          partida VARCHAR(100) NOT NULL,
          destino VARCHAR(100) NOT NULL
        )
      `;
      await conexao.execute(sql);
      conexao.release();
    } catch (erro) {
      console.log("Erro ao iniciar a tabela: " + erro);
    }
  }

  async gravar(viagem) {
    if (viagem instanceof Roma) {
      try {
        const conexao = await conectar();
        const sql = `
          INSERT INTO viagem (nome, preco, ida, volta, partida, destino) 
          VALUES (?, ?, ?, ?, ?, ?)
        `;
        const parametros = [
          viagem.nome,
          viagem.preco,
          viagem.ida,
          viagem.volta,
          viagem.partida,
          viagem.destino
        ];
        await conexao.execute(sql, parametros);
        conexao.release();
      } catch (erro) {
        console.log("Erro ao gravar a viagem: " + erro);
      }
    }
  }

  async alterar(viagem) {
    if (viagem instanceof Roma) {
      try {
        const conexao = await conectar();
        const sql = `
          UPDATE viagem 
          SET preco = ?, ida = ?, volta = ?, partida = ?, destino = ? 
          WHERE nome = ?
        `;
        const parametros = [
          viagem.preco,
          viagem.ida,
          viagem.volta,
          viagem.partida,
          viagem.destino,
          viagem.nome
        ];
        await conexao.execute(sql, parametros);
        conexao.release();
      } catch (erro) {
        console.log("Erro ao alterar a viagem: " + erro);
      }
    }
  }

  async excluir(viagem) {
    if (viagem instanceof Roma) {
      try {
        const conexao = await conectar();
        const sql = `DELETE FROM viagem WHERE nome = ?`;
        const parametros = [viagem.nome];
        await conexao.execute(sql, parametros);
        conexao.release();
      } catch (erro) {
        console.log("Erro ao excluir a viagem: " + erro);
      }
    }
  }

  async consultar() {
    try {
      const conexao = await conectar();
      const sql = `SELECT * FROM viagem ORDER BY nome`;
      const [registros] = await conexao.execute(sql);
      conexao.release();
      let listaViagens = [];
      for (const registro of registros) {
        const viagem = new Roma(
          registro.nome,
          registro.preco,
          registro.ida,
          registro.volta,
          registro.partida,
          registro.destino
        );
        listaViagens.push(viagem);
      }
      return listaViagens;
    } catch (erro) {
      console.log("Erro ao consultar as viagens: " + erro);
    }
  }
}