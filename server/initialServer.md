### Comandos utilizados para começar o desenvolvimento da nossa APIRest

Começar com nosso package.json
```bash
yarn --init -y
```

Instalar o typescript
```bash
yarn add typescript -D
```

Criar o arquivo de configurações do TS
```bash
yarn tsc --init
```

Instalar a dependência da qual ficará "escutando" nosso servidor em TypeScript e caso ocorra alguma alteração ele irá reiniciar de forma automática (a really magic)
```bash
yarn add ts-node-dev -D
```

Configurando no nosso package.json  
```bash
"scripts": {
  "start": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
},
```

>``--transpile-only`` irá apenas transpilar nosso código e não ficar procurando erros   
``--ignore-watch node_modules`` evita que ele fique tente transpilar/olhar para a node_modules já que se trata de códigos de tericeiros  
``--respawn`` ai que se encontra a mágica, é o responsável por ficar observando e reiniciar a cada alteração nos códigos