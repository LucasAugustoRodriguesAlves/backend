import { Router } from "express"; 
import ViagemCTRL from "../Controller/ViagemCtrl.js";

const rotaViagem = Router();
const viagemCTRL = new ViagemCTRL();

rotaViagem
  .post('/', (req, res) => viagemCTRL.gravar(req, res))
  .put('/', (req, res) => viagemCTRL.atualizar(req, res))
  .delete('/', (req, res) => viagemCTRL.excluir(req, res))
  .get('/', (req, res) => viagemCTRL.consultar(req, res))
  .get('/:nome', (req, res) => viagemCTRL.consultarPeloNome(req, res));

export default rotaViagem;