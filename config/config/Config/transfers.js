
const pool = require("./database");

async function criarTransferencia(req, res) {
  try {
    const {
      conta_origem,
      conta_destino,
      valor,
      descricao
    } = req.body;

    const resultado = await pool.query(
      `INSERT INTO transferencias
      (conta_origem, conta_destino, valor, descricao)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [
        conta_origem,
        conta_destino,
        valor,
        descricao
      ]
    );

    res.json(resultado.rows[0]);

  } catch (erro) {
    res.status(500).json({
      message: "Erro ao criar transferência",
      error: erro.message
    });
  }
}


async function listarTransferencias(req, res) {
  try {
    const resultado = await pool.query(
      "SELECT * FROM transferencias ORDER BY id DESC"
    );

    res.json(resultado.rows);

  } catch (erro) {
    res.status(500).json({
      message: "Erro ao buscar transferências",
      error: erro.message
    });
  }
}


module.exports = {
  criarTransferencia,
  listarTransferencias
};

