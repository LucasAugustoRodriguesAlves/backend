import ViagemDB from "../DataBase/ViagemDB.js";

export default class Roma {
  #nome;
  #preco;
  #ida;
  #volta;
  #partida;
  #destino;

  constructor(nome, preco, ida, volta, partida, destino) {
    this.#nome = nome;
    this.#preco = preco;
    this.#ida = ida;
    this.#volta = volta;
    this.#partida = partida;
    this.#destino = destino;
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
    const viDB = new ViagemDB();
    await viDB.gravar(this);
  }

  async alterar() {
    const viDB = new ViagemDB();
    await viDB.alterar(this);
  }

  async excluir() {
    const viDB = new ViagemDB();
    await viDB.excluir(this);
  }

  async consultar() {
    const viDB = new ViagemDB();
    return await viDB.consultar();
  }
}
