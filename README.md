# Node Siape Bot
Automação para buscar dados na api da Promosys(atualmentre) e atualizar dados do Siape.
### Caracteristicas:
> [!NOTE]
> Desenvolvemos um estrutura modular que apesar de estar focada em uma API específica, pode ser facilmente alterada para outras API´s. Para isso é necessário possuir conhecmento nas libs abaixo.


> [!IMPORTANT]
> #### Dependências e conhecimentos para alteração
> * mysql2
> * axios
> * yargs


### Documentação
Para melhor entender e modificar este bot, achamos conveniente descrever cada arquivo e sua função dentro da estrutura do bot.

###### loadenv.js (finalizado)
Arquivo resposnsável por realizar a leitura das variavéis de ambiente. Você pode definir diferentes ambientes de execução como development e production e definir quais variavveis carregar atraves de arquivos  _.env.NOME_DO_AMBIENTE_ .
    
~~~ javascript
const env = require('dotenv').config({path: '.env.development'});
~~~~

###### db.js (finalizado)
Arquivos responsavel pela conexão com o banco dedados. ele lé as variavéis de acordo com o ambiente Você pode testar se a conexão está ok descomentando a função __testConnection()__ neste arquivo.

###### sqlquery.js (finalizado)
Responsavel pela query de consulta. Você pode alterar a query principal do bot neste arquivo. O mesmo aguarda 2 parametros obrigatórios:
--bot e --limit com o numero do bot para execução e o limite de registros a resgatar, respectivamente.

###### bot.js (desenvolvimento)
Arquivo principal e ponto de entrada da aplkicação. Responsável pela execução do bot. Sua função é executar as cnonsultas, receber o resultado e direcionar para o arquivo de retorno.