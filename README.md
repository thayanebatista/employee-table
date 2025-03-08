# Tabela de Funcionários

## Descrição
Este é um projeto de aplicação web para gerenciamento de tabela de funcionários, desenvolvido com React, TypeScript e Vite.

## Pré-requisitos
- Node.js (versão 23.8 ou superior)
- pnpm

## Instalação

1. Clone o repositório:
```bash
git clone https://github.seu-usuario/employee-table.git
cd employee-table
```

2. Instale as dependências:
```bash
# Usando pnpm
pnpm install
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:
```bash
# Usando pnpm
pnpm dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## Construção para Produção

Para criar uma versão de produção:
```bash
# Usando pnpm
pnpm build
```

## Tecnologias Utilizadas
- React
- TypeScript
- Vite
- ESLint
- json-server

## Configuração da API Simulada

Para ter acesso aos dados que alimentarão o projeto, siga estas instruções:

1. Instale o json-server (caso ainda não tenha):
```bash
npm install -g json-server
```

2. Inicie o servidor json-server em um terminal separado:
```bash
npx json-server db/db.json
```

O json-server irá disponibilizar os dados da API simulada, geralmente em `http://localhost:3000`.

## Licença
Este projeto está sob licença MIT.

# React + TypeScript + Vite
