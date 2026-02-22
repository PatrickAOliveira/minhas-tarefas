# Guia de Configuração do Projeto

Assim que fizer o fork do projeto, é preciso configurar o mesmo na máquina antes de executar o `npm start`

## Instalando as Dependencias

Execute o seguinte comando no terminal

```sh
npm i
```

Isso irá instalar as dependencias do Node e do React que será preciso pra poder executar o projeto corretamente. Em seguida haverá erros no projeto relacionados ao `eslint`, para resolver de forma rápida execute o comando abaixo no terminal

```sh
npx eslint --fix .
```

### Instalando o Styled-Components

Para esse projeto, iremos usar o `styled-components` para estilizar os componentes do projeto, agora no terminal execute o comando abaixo para instalar

```sh
npm i --save styled-components
```

Logo em seguida iremos precisar da tipagem para o `styled-components` para que ele possa reconhecer a tipagem do msm, de volta para o terminal execute o comando abaixo

```sh
npm i --save-dev @types/styled-components
```

### Instalando o Redux

Tendo executado os comandos acima, agora só falta instalar o pacote Redux do React, abra o terminal e digite o seguinte comando que está abaixo

```sh
npm i --save react-redux @reduxjs/toolkit
```

### Instalando o React Router

Para prosseguirmos com o desenvolvimento do projeto, iremos precisar instalar o `react-router`, para isso no terminal digite o seguinte comando abaixo

```sh
npm i --save react-router-dom
```
