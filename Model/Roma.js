import ViagemDB from "../DataBase/ViagemDB.js";

export default class Roma {
  #nome;
  #preco;
  #ida;
  #volta;
  #partida;
  #destino;
  #viagemDB;

  constructor(nome, preco, ida, volta, partida, destino) {
    this.#nome = nome;
    this.#preco = preco;
    this.#ida = ida;
    this.#volta = volta;
    this.#partida = partida;
    this.#destino = destino;
    this.#viagemDB = new ViagemDB();
  }

  get nome() {
    return this.#nome;
  }

  set nome(novonome) {
    this.#nome = novonome;
  }

  get preco() {
    return this.#preco;
  }

  set preco(novopreco) {
    this.#preco = novopreco;
  }

  get ida() {
    return this.#ida;
  }

  set ida(novaida) {
    this.#ida = novaida;
  }

  get volta() {
    return this.#volta;
  }

  set volta(novavolta) {
    this.#volta = novavolta;
  }

  get partida() {
    return this.#partida;
  }

  set partida(novapartida) {
    this.#partida = novapartida;
  }

  get destino() {
    return this.#destino;
  }

  set destino(destino) {
    this.#destino = destino;
  }

  toJSON() {
    return {
      nome: this.#nome,
      preco: this.#preco,
      ida: this.#ida,
      volta: this.#volta,
      partida: this.#partida,
      destino: this.#destino,
    };
  }

  async gravar() {
    await this.#viagemDB.gravar(this);
  }

  async alterar() {
    await this.#viagemDB.alterar(this);
  }

  async excluir() {
    await this.#viagemDB.excluir(this);
  }

  async consultar(termo) {
    return await this.#viagemDB.consultar(termo);
  }

  async consultarNome(nome) {
    return await this.#viagemDB.consultarNome(nome);
  }
}