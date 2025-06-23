// registroService.js
const db = require('./db');

async function selecionarRegistros(limit) {
  try {
    const [registros] = await db.execute('SELECT * FROM sua_tabela LIMIT ?', [limit]);
    return registros;
  } catch (error) {
    console.error('Erro ao selecionar registros:', error);
    throw error;
  }
}

module.exports = { selecionarRegistros };