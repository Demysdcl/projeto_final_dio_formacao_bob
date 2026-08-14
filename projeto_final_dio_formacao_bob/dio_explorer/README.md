# 🚀 DIO Explorer - Sistema de Comandos Slash

Sistema de comandos interativos para explorar trilhas, desafios e certificados da plataforma Digital Innovation One (DIO).

## 📋 Índice

- [Sobre](#sobre)
- [Comandos Disponíveis](#comandos-disponíveis)
- [Instalação](#instalação)
- [Uso](#uso)
- [Exemplos](#exemplos)
- [Estrutura do Projeto](#estrutura-do-projeto)

## 🎯 Sobre

O DIO Explorer é um sistema de comandos slash que permite:
- 📚 Visualizar planos de estudo detalhados de trilhas
- ⚡ Explorar acelerações AI Powered disponíveis na DIO
- 🎯 Gerar desafios de código personalizados
- 🎓 Criar certificados de conclusão em Markdown

## 🛠️ Comandos Disponíveis

### `/trilha <tecnologia>`

Exibe um plano de estudos completo e formatado para uma tecnologia específica.

**Parâmetros:**
- `tecnologia` (obrigatório): Nome da tecnologia ou trilha

**Retorna:**
- Informações gerais da trilha
- Badges disponíveis
- Lives ao vivo
- Promoções ativas
- Plano de estudos dividido em fases
- Próximos passos

**Exemplos:**
```bash
/trilha Python
/trilha JavaScript
/trilha React
/trilha DevOps
```

---

### `/aceleracao [tecnologia]`

Exibe as acelerações disponíveis na DIO, filtradas opcionalmente por tecnologia.

**Parâmetros:**
- `tecnologia` (opcional): Nome da tecnologia ou stack para filtrar

**Retorna:**
- Lista de acelerações disponíveis
- Informações gerais (módulos, XP, nível)
- Badges disponíveis
- Lives ao vivo
- Indicação de acesso vitalício

**Exemplos:**
```bash
/aceleracao
/aceleracao Python
/aceleracao Java
/aceleracao React
/aceleracao AWS
```

---

### `/desafio <tecnologia> [nivel]`

Gera um desafio de código aleatório baseado na tecnologia e nível escolhidos.

**Parâmetros:**
- `tecnologia` (obrigatório): Nome da tecnologia
- `nivel` (opcional): Básico, Intermediário ou Avançado

**Retorna:**
- Título e descrição do desafio
- Nível de dificuldade e pontos XP
- Requisitos detalhados
- Dicas para resolução
- Exemplos de entrada/saída
- Recompensas

**Exemplos:**
```bash
/desafio Python
/desafio JavaScript Básico
/desafio Java Intermediário
/desafio React Avançado
```

---

### `/certificado "<nome>" "<tecnologia>"`

Gera um certificado fictício de conclusão em formato Markdown.

**Parâmetros:**
- `nome` (obrigatório): Nome completo do aluno (entre aspas)
- `tecnologia` (obrigatório): Nome da tecnologia/trilha (entre aspas)

**Retorna:**
- Certificado completo em Markdown
- Código de verificação único
- Detalhes da formação
- Competências desenvolvidas
- Arquivo salvo em `docs/certificados-emitidos/`

**Exemplos:**
```bash
/certificado "João Silva" "Python"
/certificado "Maria Santos" "JavaScript"
/certificado "Pedro Oliveira" "Java"
```

---

### `/help`

Exibe a lista completa de comandos disponíveis com descrições e exemplos, incluindo o novo comando `/aceleracao`.

## 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até o diretório
cd projeto_final_dio_formacao_bob/dio_explorer

# Instale as dependências (se necessário)
npm install
```

## 🚀 Uso

### Importando os Comandos

```typescript
import processarComando from './commands';

// Processar um comando
const resultado = processarComando('/trilha Python');
console.log(resultado);
```

### Usando Comandos Individuais

```typescript
import { 
  executarComandoTrilha,
  executarComandoDesafio,
  executarComandoCertificado 
} from './commands';

// Comando trilha
const trilha = executarComandoTrilha('Python');

// Comando desafio
const desafio = executarComandoDesafio('JavaScript', 'Intermediário');

// Comando certificado
const certificado = executarComandoCertificado('João Silva', 'Python');
```

## 📚 Exemplos

### Exemplo 0: Listar Acelerações AI Powered

```typescript
const resultado = processarComando('/aceleracao');
```

**Saída:**
```markdown
# ⚡ Acelerações DIO - AI Powered

📚 **12 aceleração(ões) encontrada(s)**

---

## 1. Aceleração Global - Python AI Powered

### 📊 Informações Gerais
- **Tecnologia:** Python
- **Nível:** Intermediário
- **Módulos:** 6
- **XP Total:** 8.000 pontos
- **Acesso Vitalício:** ❌ Não
...
```

---

### Exemplo 1: Explorar Trilha de Python

```typescript
const resultado = processarComando('/trilha Python');
```

**Saída:**
```markdown
# 🎯 Plano de Estudos - Python

📚 **1 trilha(s) encontrada(s)**

---

## 1. Formação Python Developer

### 📊 Informações Gerais
- **Tecnologia:** Python
- **Nível:** Básico
- **Módulos:** 12
- **XP Total:** 15.000 pontos
...
```

### Exemplo 2: Gerar Desafio de JavaScript

```typescript
const resultado = processarComando('/desafio JavaScript Intermediário');
```

**Saída:**
```markdown
# 🎯 Desafio de Código - JavaScript

## To-Do List com LocalStorage

**Dificuldade:** Intermediário | **Pontos:** 250 XP

---

### 📝 Descrição
Desenvolva uma aplicação de lista de tarefas com persistência local e filtros.
...
```

### Exemplo 3: Gerar Certificado

```typescript
const resultado = processarComando('/certificado "João Silva" "Python"');
```

**Saída:**
```markdown
# ✅ Certificado Gerado com Sucesso!

🎉 **Parabéns, João Silva!**

Seu certificado de conclusão da formação **Formação Python Developer** foi gerado com sucesso!
...
```

## 📁 Estrutura do Projeto

```
dio_explorer/
├── commands/
│   ├── index.ts          # Arquivo principal com registro de comandos
│   ├── trilha.ts         # Comando /trilha
│   ├── aceleracao.ts     # Comando /aceleracao
│   ├── desafio.ts        # Comando /desafio
│   └── certificado.ts    # Comando /certificado
├── data/
│   └── trilhas_dio.json  # Base de dados das trilhas e acelerações
├── docs/
│   └── certificados-emitidos/  # Certificados gerados
└── README.md             # Este arquivo
```

## 🎓 Tecnologias Disponíveis

O sistema suporta as seguintes tecnologias:

- **Linguagens:** Python, Java, JavaScript, TypeScript, C#, PHP, Ruby, Go, Rust, Kotlin, Swift
- **Frameworks:** React, Angular, Vue.js, Node.js, Spring, Laravel, Rails, Flutter, Unity
- **Cloud:** AWS, Azure, DevOps
- **Especialidades:** Data Science, Machine Learning, Blockchain, Cybersecurity, QA, UX/UI Design
- **Gestão:** Product Manager, Scrum Master, Arquitetura de Software

### ⚡ Tecnologias com Aceleração AI Powered

| Aceleração | Tecnologia | Nível |
|---|---|---|
| Aceleração Global - Java AI Powered | Java | Intermediário |
| Aceleração Global - Python AI Powered | Python | Intermediário |
| Aceleração Global - Angular AI Powered | Angular | Intermediário |
| Aceleração Global - React AI Powered | React | Intermediário |
| Aceleração Global - Node.js AI Powered | Node.js | Intermediário |
| Aceleração Global - .NET AI Powered | C# | Intermediário |
| Aceleração Global - Cloud AWS AI Powered | AWS | Avançado |
| Aceleração Global - Cloud Azure AI Powered | Azure | Avançado |
| Aceleração Global - DevOps AI Powered | DevOps | Avançado |
| Aceleração Global - Data Science AI Powered | Python | Avançado |
| Aceleração Global - Mobile Android AI Powered | Kotlin | Intermediário |
| Aceleração Global - UX/UI AI Powered | Design | Básico |

## 🔧 Funcionalidades

### Comando `/aceleracao`
- ✅ Listagem de todas as acelerações disponíveis
- ✅ Filtro opcional por tecnologia
- ✅ Informações detalhadas (módulos, XP, nível)
- ✅ Badges e conquistas disponíveis
- ✅ Lives ao vivo das acelerações

### Comando `/trilha`
- ✅ Busca por tecnologia ou nome da trilha
- ✅ Informações detalhadas da formação
- ✅ Plano de estudos dividido em fases
- ✅ Badges e conquistas disponíveis
- ✅ Lives ao vivo programadas
- ✅ Promoções ativas

### Comando `/desafio`
- ✅ Desafios específicos por tecnologia
- ✅ Três níveis de dificuldade
- ✅ Requisitos detalhados
- ✅ Dicas para resolução
- ✅ Exemplos práticos
- ✅ Sistema de pontuação XP

### Comando `/certificado`
- ✅ Certificado completo em Markdown
- ✅ Código de verificação único
- ✅ Informações da formação
- ✅ Competências desenvolvidas
- ✅ Badges conquistadas
- ✅ Salvamento automático em arquivo

## 📝 Notas

- Os certificados são fictícios e gerados para fins educacionais
- Os desafios são exemplos e podem não refletir desafios reais da plataforma DIO
- As trilhas e acelerações são baseadas em dados simulados inspirados no catálogo público da DIO
- As acelerações possuem acesso temporário (`vitalicio: false`), diferente das trilhas

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Adicionar novos comandos
- Melhorar os desafios existentes
- Adicionar mais tecnologias ou acelerações
- Corrigir bugs
- Melhorar a documentação

## 📄 Licença

Este projeto é parte do Projeto Final da Formação IBM com Bob da DIO.

---

<div align="center">

**Desenvolvido com ❤️ para a comunidade DIO**

🚀 **Continue aprendendo e evoluindo!** 🚀

</div>