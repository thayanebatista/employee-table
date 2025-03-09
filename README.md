# Tabela de Funcionários 👥💼

## 🌟 Visão Geral do Projeto

### O que é?
Uma aplicação web moderna e intuitiva para gerenciamento de informações de funcionários, desenvolvida com tecnologias de ponta para proporcionar uma experiência de usuário fluida, responsiva e eficiente.

### Funcionalidades Principais
- 📋 Listagem completa de funcionários
- 🔍 Filtro e busca avançados por:
  - Nome
  - Cargo
  - Telefone

### Detalhes de Implementação
  - Componente de tabela responsivo
  - Filtro dinâmico com debounce
  - Formatação de data e telefone utilizando bibliotecas modernas

## 🛠️ Tecnologias Utilizadas
- **Frontend**: [React](https://react.dev/) + TypeScript
- **Bundler**: [Vite](https://vite.dev/)
- **Estilização**: [TailwindCSS](https://tailwindcss.com/)
- **Gerenciamento de Estado**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Testes**: Vitest + React Testing Library
- **API Simulada**: json-server

## 🔧 Possíveis Futuras Melhorias

### Funcionalidades 
- ➕ Adição de novos funcionários
- ✏️ Edição de informações de funcionários existentes
- 🗑️ Remoção de funcionários
- 📊 Relatórios e dashboards
- 🔐 Sistema de autenticação
  - Area de login com o Google (sugestão)

## 📦 Pré-requisitos

### Requisitos de Sistema
- NVM - Node Version Manager
- Node.js (consulte a versão no arquivo `.nvmrc`)
- pnpm (gerenciador de pacotes)
- Git

### Conhecimentos Recomendados
- Fundamentos de React
- TypeScript
- TailwindCSS
- Desenvolvimento web moderno
- Conceitos básicos de API REST

## 🚀 Instalação e Configuração

### Passos para Configuração Local

1. **Clonar o Repositório**
```bash
git clone https://github.seu-usuario/employee-table.git
cd employee-table
```

2. **Instalar Dependências**
```bash
nvm use
pnpm install
```

3. **Configurar Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto:
```
VITE_API_BASE_URL=http://localhost:3000
```

4. **Iniciar Servidor de Desenvolvimento**
```bash
# Iniciar json-server (API simulada)
npx json-server db/db.json

# ou

json-server --watch db/db.json

# Em outro terminal, iniciar aplicação React
pnpm dev
```

5. **Acessar a Aplicação**
- Aplicação: [http://localhost:8080](http://localhost:8080)
- API Simulada: [http://localhost:3000](http://localhost:3000)

## 🧪 Executando Testes

```bash
# Rodar testes unitários
pnpm test

# Rodar testes de cobertura
pnpm test:coverage
```

### Contribuindo para o Projeto

#### Diretrizes de Contribuição
1. Clone o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m '[NEW] adicionar nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

#### Padrões de Código
- Siga as configurações de ESLint
- Utilize TypeScript estritamente tipado
- Utilize todo o poder do TailwindCSS
- Mantenha cobertura de testes
- Documente novas funcionalidades

## 📄 Licença
Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

## Demonstração

![Localhost no iPhone 14 Pro Max](https://tinypic.host/image/localhost-8080-%28iPhone-14-Pro-Max%29.3GqCrz)

![Localhost Desktop](https://tinypic.host/image/localhost-8080.3GqGHU)
