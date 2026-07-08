

const express = require("express");

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    console.log("Webhook recebido:", req.body);

    res.status(200).json({
      message: "Webhook recebido com sucesso"
    });

  } catch (erro) {
    res.status(500).json({
      message: "Erro ao processar webhook",
      error: erro.message
    });
  }
});

module.exports = router;
