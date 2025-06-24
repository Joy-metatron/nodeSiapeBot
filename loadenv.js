// loadenv.js
/**
 * @describe Arquivo para carregar variáveis de ambiente
 * @module loadenv
 * @requires dotenv
 */
const env = require('dotenv').config({path: '.env.development'});

// console.log(env);

module.exports = env;