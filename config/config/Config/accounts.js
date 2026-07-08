
const pool = require("./database");

async function criarConta(req, res) {
  try {
    const { usuario_id, iban, numero_conta, saldo } = req.body;

    const resultado = await pool.query(
      `INSERT INTO contas 
      (usuario_id, iban, numero_conta, saldo) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *`,
      [usuario_id, iban, numero_conta, saldo]
    );

    res.json(resultado.rows[0]);

  } catch (erro) {
    res.status(500).json({
      message: "Erro ao criar conta",
      error: erro.message
    });
  }
}

async function buscarConta(req, res) {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      "SELECT * FROM contas WHERE id = $1",
      [id]
    );

    res.json(resultado.rows[0]);

  } catch (erro) {
    res.status(500).json({
      message: "Erro ao buscar conta",
      error: erro.message
    });
  }
}

module.exports = {
  criarConta,
  buscarConta
};
