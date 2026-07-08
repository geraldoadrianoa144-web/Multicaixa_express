
const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  console.log("Webhook recebido:", req.body);

  res.json({
    message: "Webhook recebido com sucesso"
  });
});

router.get("/", (req, res) => {
  res.json({
    message: "Webhook funcionando"
  });
});

module.exports=router;
