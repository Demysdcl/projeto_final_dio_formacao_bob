# 🎯 Slash Commands do DIO Explorer

Este projeto possui comandos slash personalizados que podem ser executados diretamente no chat do Bob!

## 📋 Comandos Disponíveis

### 1️⃣ `/trilha <tecnologia>`

Exibe um plano de estudos completo e formatado para uma tecnologia específica.

**Como usar:**
```
/trilha Python
/trilha JavaScript
/trilha React
/trilha DevOps
```

**O que retorna:**
- 📊 Informações gerais da trilha (nível, módulos, XP)
- 🏆 Badges disponíveis
- 🎥 Lives ao vivo programadas
- 🎁 Promoções ativas
- 📝 Plano de estudos dividido em 3 fases
- 🎯 Próximos passos

---

### 2️⃣ `/aceleracao [tecnologia]`

Lista as acelerações AI Powered disponíveis na DIO, com filtro opcional por tecnologia.

**Como usar:**
```
/aceleracao
/aceleracao Python
/aceleracao React
/aceleracao AWS
```

**O que retorna:**
- 📊 Informações gerais da aceleração (nível, módulos, XP)
- 🏆 Badges disponíveis
- 🎥 Lives ao vivo da aceleração
- ❌ Acesso Vitalício: Não (acelerações têm duração temporária)
- 🎯 Próximos passos

**Tecnologias com Aceleração disponível:**
- Java, Python, Angular, React, Node.js, .NET
- AWS, Azure, DevOps, Data Science, Android (Kotlin), UX/UI

---

### 3️⃣ `/desafio <tecnologia> [nivel]`

Gera um desafio de código aleatório baseado na tecnologia e nível escolhidos.

**Como usar:**
```
/desafio Python
/desafio JavaScript Básico
/desafio Java Intermediário
/desafio React Avançado
```

**Níveis disponíveis:**
- `Básico` - 100 XP
- `Intermediário` - 250 XP
- `Avançado` - 500 XP

**O que retorna:**
- 📝 Descrição detalhada do desafio
- ✅ Requisitos técnicos
- 💡 Dicas para resolução
- 📊 Exemplos de entrada/saída
- 🏆 Recompensas (XP e badges)

---

### 4️⃣ `/certificado "<nome>" "<tecnologia>"`

Gera um certificado fictício de conclusão em formato Markdown.

**Como usar:**
```
/certificado "João Silva" "Python"
/certificado "Maria Santos" "JavaScript"
/certificado "Pedro Oliveira" "Java"
```

**⚠️ IMPORTANTE:** Use aspas duplas para o nome e tecnologia!

**O que retorna:**
- 🎓 Certificado completo em Markdown
- 📜 Código de verificação único
- 📊 Detalhes da formação (carga horária, módulos, XP)
- 🏆 Competências desenvolvidas
- 💾 Arquivo salvo em `projeto_final_dio_formacao_bob/dio_explorer/docs/certificados-emitidos/`

---

## 🚀 Como Usar no Chat do Bob

Simplesmente digite o comando no chat do Bob, exatamente como mostrado nos exemplos acima:

**Exemplo 1 - Ver trilha de Python:**
```
/trilha Python
```

**Exemplo 2 - Listar acelerações AI Powered:**
```
/aceleracao
```

**Exemplo 3 - Ver aceleração específica:**
```
/aceleracao React
```

**Exemplo 4 - Gerar desafio intermediário de JavaScript:**
```
/desafio JavaScript Intermediário
```

**Exemplo 5 - Gerar certificado:**
```
/certificado "Seu Nome Completo" "Python"
```

## 📚 Tecnologias Disponíveis

O sistema suporta mais de 30 tecnologias, incluindo:

### Linguagens de Programação
- Python, Java, JavaScript, TypeScript
- C#, PHP, Ruby, Go, Rust
- Kotlin, Swift

### Frameworks e Bibliotecas
- React, Angular, Vue.js
- Node.js, Spring, Laravel
- Flutter, Unity

### Cloud e DevOps
- AWS, Azure, DevOps
- Docker, Kubernetes

### Especialidades
- Data Science, Machine Learning
- Blockchain, Cybersecurity
- QA, UX/UI Design
- Product Manager, Scrum Master

## 🔧 Estrutura Técnica

Os comandos estão implementados em:
```
projeto_final_dio_formacao_bob/dio_explorer/
├── commands/
│   ├── index.ts          # Processador principal
│   ├── trilha.ts         # Comando /trilha
│   ├── aceleracao.ts     # Comando /aceleracao
│   ├── desafio.ts        # Comando /desafio
│   └── certificado.ts    # Comando /certificado
├── data/
│   └── trilhas_dio.json  # Base de dados (32 trilhas + 12 acelerações)
└── docs/
    └── certificados-emitidos/  # Certificados gerados
```

## 💡 Dicas de Uso

1. **Busca Flexível:** O comando `/trilha` aceita tanto o nome da tecnologia quanto parte do nome da formação
   - `/trilha Python` encontra "Formação Python Developer"
   - `/trilha Data Science` encontra "Formação Data Science"

2. **Acelerações sem filtro:** `/aceleracao` sem argumento lista todas as 12 acelerações AI Powered
   - `/aceleracao` → lista todas
   - `/aceleracao AWS` → mostra apenas a aceleração de Cloud AWS

3. **Nível Opcional:** No comando `/desafio`, o nível é opcional
   - `/desafio Python` gera um desafio aleatório de qualquer nível
   - `/desafio Python Básico` gera apenas desafios básicos

4. **Aspas Obrigatórias:** No comando `/certificado`, use sempre aspas duplas
   - ✅ Correto: `/certificado "João Silva" "Python"`
   - ❌ Errado: `/certificado João Silva Python`

5. **Case Insensitive:** Os comandos não diferenciam maiúsculas de minúsculas
   - `/trilha python` = `/trilha Python` = `/trilha PYTHON`
   - `/aceleracao react` = `/aceleracao React`

## 🎓 Exemplos Práticos

### Cenário 1: Descobrindo as Acelerações AI Powered
```
/aceleracao
```
Você verá as 12 acelerações disponíveis com suas tecnologias, XP e lives.

### Cenário 2: Iniciando estudos em Python
```
/trilha Python
```
Você verá o plano completo com 12 módulos, 15.000 XP e badges disponíveis.

### Cenário 3: Praticando JavaScript
```
/desafio JavaScript Intermediário
```
Receberá um desafio como "To-Do List com LocalStorage" valendo 250 XP.

### Cenário 4: Completou uma formação
```
/certificado "Maria Silva" "React"
```
Gerará um certificado completo com código de verificação e salvará em arquivo.

## 📝 Notas Importantes

- ✅ Os comandos funcionam apenas neste projeto
- ✅ Os certificados são fictícios (fins educacionais)
- ✅ Os desafios são exemplos práticos
- ✅ As trilhas e acelerações são baseadas em dados simulados da DIO
- ✅ Acelerações possuem `vitalicio: false` (acesso temporário)
- ✅ Todos os comandos retornam Markdown formatado

## 🆘 Precisa de Ajuda?

Se tiver dúvidas sobre os comandos, você pode:

1. Consultar este README
2. Ver exemplos em `projeto_final_dio_formacao_bob/dio_explorer/EXEMPLOS.md`
3. Verificar o código fonte em `projeto_final_dio_formacao_bob/dio_explorer/commands/`

---

<div align="center">

**Desenvolvido para o Projeto Final da Formação IBM com Bob - DIO**

🚀 **Bons estudos e boa sorte nos desafios!** 🚀

</div>