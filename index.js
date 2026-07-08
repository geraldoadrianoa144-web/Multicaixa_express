
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const webhookRoutes = require("./webhooks");

app.use("/webhooks", webhookRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Multicaixa Express API online"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
