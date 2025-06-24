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

###### loadenv.js
Arquivo resposnsável por realizar a leitura das variavéis de ambiente. Você pode definir diferentes ambientes de execução como development e production e definir quais variavveis carregar atraves de arquivos __.env.NOME_DO_AMBIENTE__.
    
~~~ javascript
const env = require('dotenv').config({path: '.env.development'});
~~~~



 
 