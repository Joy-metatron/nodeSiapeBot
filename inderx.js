#!/usr/bin/env node
// index.js
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

if (argv.bot) {
  console.log(`Você está usando o BOT nº: ${argv.bot}`);
  // Chame suas funções aqui
} else {
  console.log('Parâmetro --bot não foi definido.');
}