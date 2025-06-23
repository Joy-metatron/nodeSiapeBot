// respostaService.js
const db = require('./db');

async function gravarResposta(resposta) {
  try {
    const query = 'INSERT INTO sua_tabela_respostas (campo1, campo2) VALUES (?, ?)';
    const valores = [resposta.campo1, resposta.campo2];
    await db.execute(query, valores);
  } catch (error) {
    console.error('Erro ao gravar resposta:', error);
    throw error;
  }
}

module.exports = { gravarResposta };