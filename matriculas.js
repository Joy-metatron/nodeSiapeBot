// Matriculas.js
const db = require('./db');
const yargs = require('yargs/yargs');
const argv = yargs(process.argv).argv;
// const argv = yargs(process.argv.argv);

/**
 * Seleciona registros do banco de dados com limite definido
 * @param { number } limit - Quantidade máxima de registros a retornar
 * @param { number } bot - Nome do bot para filtrar os registros
 * @returns {Promise<Array>} - Array de registros do banco
 * @throws {Error} - Lança erro se a consulta falhar
 */
async function selecionarRegistros(limit) {
  // Validação básica do parâmetro
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error('O limite deve ser um número inteiro positivo');
  }

  try {
    // Executa a consulta parametrizada (prevenção contra SQL injection)
    // const [registros] = await db.execute('SELECT * FROM sua_tabela LIMIT ?', [limit]);
    const basesql = 'SELECT id, nb FROM new_inss.api_siape where bot=@BOT@ limit @LIMIT@';
    const sql = basesql.replace('@BOT@', argv.bot || 1).replace('@LIMIT@', argv.limit);
    console.log('Consulta SQL:', sql);
    // Verifica se trouxe resultados
    if (!registros || registros.length === 0) {
      console.warn('⚠️ Consulta executada com sucesso, mas nenhum registro encontrado');
    }
    
    // return registros;
  } catch (error) {
    console.error('❌ Erro ao selecionar registros:', error);
    throw error; // Propaga o erro para o chamador
  }
}

selecionarRegistros(10);

module.exports = { selecionarRegistros };