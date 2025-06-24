// sqlquery.js
/**
 * @describe - prepara a query de consulta
 * @requires - dotenv, yargs
 */
const env = require('./loadenv.js'); // Carrega as variáveis de ambiente do arquivo .env
const yargs = require('yargs/yargs'); // para capturar argumentos de linha de comando
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
  .option('bot', {
    alias: 'b',
    describe: 'Nome do bot (obrigatório)',
    type: 'string',
    demandOption: true // torna a opção obrigatória
  })
  .option('limit', {
    alias: 'l',
    describe: 'Limite de registros (obrigatório)',
    type: 'number',
    demandOption: true // torna a opção obrigatória
  })
  .help() // adiciona a opção de ajuda (-h, --help)
  .argv;

if (!argv.bot || !argv.limit) {
  console.error('Erro: É necessário fornecer os parâmetros --bot e --limit.');
  process.exit(1);
}

  const basesql = `SELECT id, nb FROM ${env.parsed.DB_NAME}.${env.parsed.DB_TABLE} where bot=@BOT@ limit @LIMIT@`;
  const sql = basesql.replace('@BOT@', argv.bot || 1).replace('@LIMIT@', argv.limit);
  console.log('Consulta SQL:', sql);

module.exports = { sql };
// console.log(env);
