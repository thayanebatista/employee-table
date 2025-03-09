# Tabela de Funcionários 👥💼

## 🌟 Visão Geral do Projeto

### O que é?
Uma aplicação web moderna e intuitiva para gerenciamento de informações de funcionários, desenvolvida com tecnologias de ponta para proporcionar uma experiência de usuário fluida e eficiente.

### Funcionalidades Principais
- 📋 Listagem completa de funcionários
- ➕ Adição de novos funcionários
- ✏️ Edição de informações de funcionários existentes
- 🗑️ Remoção de funcionários
- 🔍 Filtro e busca avançados por:
  - Nome
  - Cargo
  - Telefone

### O que o Projeto NÃO Faz
- 🚫 Não é um sistema de folha de pagamento completo
- 🚫 Não gerencia benefícios ou informações de RH detalhadas
- 🚫 Não possui autenticação avançada ou controle de acesso

## 🛠️ Tecnologias Utilizadas
- **Frontend**: React + TypeScript
- **Bundler**: Vite
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: Zustand
- **Testes**: Jest + React Testing Library
- **API Simulada**: json-server

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

## 🔧 Possíveis Melhorias

### Funcionalidades 
- 🔐 Sistema de autenticação
  - Area de login com o Google
- 📊 Relatórios e dashboards

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

## 🤝 Contato e Suporte

Dúvidas ou sugestões? Abra uma issue no GitHub ou entre em contato.

---

**Desenvolvido com ❤️ por Thayane Batista**
