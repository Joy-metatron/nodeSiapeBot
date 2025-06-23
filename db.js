// db.js
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'seu_host',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'sua_base_de_dados'
};

const db = mysql.createConnection(dbConfig);

module.exports = db;