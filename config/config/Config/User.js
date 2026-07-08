

const pool = require("./database");

async function criarUsuario(req, res) {
  try {
    const { nome, email } = req.body;

    const resultado = await pool.query(
      "INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *",
      [nome, email]
    );

    res.json(resultado.rows[0]);

  } catch (erro) {
    res.status(500).json({
      message: "Erro ao criar usuário",
      error: erro.message
    });
  }
}

async function listarUsuarios(req, res) {
  try {
    const resultado = await pool.query(
      "SELECT * FROM usuarios"
    );

    res.json(resultado.rows);

  } catch (erro) {
    res.status(500).json({
      message: "Erro ao buscar usuários",
      error: erro.message
    });
  }
}

module.exports = {
  criarUsuario,
  listarUsuarios
};
