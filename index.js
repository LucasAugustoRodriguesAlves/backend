import express from "express";
import rotaViagem from "./Route/rotaViagem.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/viagens", rotaViagem);

app.listen(3000, "localhost", () => {
  console.log("Backend ouvindo em http://localhost:3000");
});
