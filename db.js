// db.js
/**
 * Data create: 2025-06-24
 * @module db
 * @requires dotenv
 * @requires mysql2/promise
 * @description Este módulo configura a conexão com o banco de dados MySQL usando variáveis de ambiente.
 */
const env = require('./loadenv.js'); // Carrega as variáveis de ambiente do arquivo .env
// const env = require('dotenv').config({path: '.env.production'});
const mysql = require('mysql2/promise');
// dados de conexão com o banco de dados
const dbConfig = {
  host: env.parsed.DB_HOST || 'localhost',
  port: env.parsed.DB_PORT || 3306,
  user: env.parsed.DB_USER || 'seu_usuario',
  password: env.parsed.DB_PASSWORD ||'sua_senha',
  database: env.parsed.DB_NAME || 'sua_base_de_dados'
};

// const db = mysql.createConnection(dbConfig);
const db = mysql.createPool(dbConfig);

/**
 * Função que testa a conexão. é usada para testar os arquivos de ambiente
 * e se os mesmos esão funcionais. comente a chamada a função em ambientes de 
 * produção e testes.
 */
async function testConnection() {
  let connection;
  try {
    // Tenta obter uma conexão do pool
    connection = await db.getConnection();
    
    // Executa ping para testar conexão real
    await connection.ping();
    
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso');
    console.log(`📊 Banco de dados: ${dbConfig.database}@${dbConfig.host}:${dbConfig.port}`);
  } catch (error) {
    // Log detalhado para ajudar no troubleshooting
    console.error('❌ Falha na conexão com o banco de dados:');
    
    // Mensagens específicas para erros comuns
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('- Credenciais inválidas (usuário/senha)');
    } else if (error.code === 'ECONNREFUSED') {
      console.error(`- Servidor inacessível em ${dbConfig.host}:${dbConfig.port}`);
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error(`- Banco de dados "${dbConfig.database}" não existe`);
    } else {
      console.error(`- Código do erro: ${error.code}\n- Mensagem: ${error.message}`);
    }
    
    // Informação sensível nunca é logada
    console.error('- Verifique suas variáveis de ambiente');
  } finally {
    // Libera a conexão de volta para o pool
    if (connection) connection.release();
  }
}
// testConnection();

// Exporta o db (pool) para uso na aplicação
module.exports = db;