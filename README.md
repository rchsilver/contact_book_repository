<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
Está é uma API criada com objetivo de ser o Back-End de um projeto Full-Stack de gerenciamente de contatos.
[Nest](https://github.com/nestjs/nest) 

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
- Editor de texto (IDE) preferencialmente VScode pois foi nele que a aplicação foi desenvolvida
- Uma ferramenta de teste e depuração de APIs para testes (Opicional)
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Clonar o Repositório :

```
- Clique no botão (<>code) e copie e chave SSH
```

Salvar uma copia do projeto em sua máquina:

```
- Abra o diretorio onde será salvo o projeto e abra o terminal nesse diretório
- Rode o comando: git clone (chave SSH copiada)
- Após isso você terá uma copia totalmente editavel de todo o projeto em sua maquina
```

## 📦 Implantação

Manipulando o arquivo .env

```
- Crie um arquivo chamado .env na pasta raiz de contact_bookrepository
- Dentro dele crie as variáveis de ambiente seguindo o padrão do arquivo .env.example
- Configure suas variáveis de ambiente com suas credenciais do PostgresSQL e um novo banco de dados para estar utilizando no projeto.

- ATENÇÃO: Para que o servidor funcione corretamente as credenciais do arquivo .env devem estar exatamente iguais as credenciais do seu banco de dados PostegresSQL e não se esqueça de salvar o arquivo 
```

## Para rodar o projeto localmente deve instalar as dependências usando Yarn ou NPM e rodar as migrações para gerar as tabelas.

## Intalação com NPM

```bash
npm install
```

## Intalação com YARN

```bash
yarn
```

## Para rodar as migrations

```bash
npx prisma migrate dev
```

## Para rodar a aplicação localmente com NPM

```bash
npm run start:dev
```

## Para rodar a aplicação localmente com YARN

```bash
yarn start:dev
```

## Para acessar a Documentação da API click no link a baixo(O servidor deve estar rodando localmente):

[Link para Doc](http://localhost:3000/api)

## License

Nest is [MIT licensed](LICENSE).
