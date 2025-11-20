
---

# 🌐 **SkillLoop – Conectando Talentos para Construir o Futuro do Trabalho**

### **Global Solution – Front-End Design / Web Development – 2º Semestre / 2025**

Plataforma web colaborativa desenvolvida com **React + Tailwind CSS**, inspirada no conceito de redes profissionais modernas focadas em competências, propósito e inclusão.

---

## 🚀 **Resumo do Projeto**

O *SkillLoop* é uma SPA (Single Page Application) desenvolvida para simular uma rede profissional semelhante ao LinkedIn, permitindo explorar perfis fictícios de profissionais e visualizar seus dados completos, competências e experiências.

A proposta é refletir sobre como a tecnologia pode transformar relações de trabalho e promover um futuro mais justo, inclusivo e sustentável.

A aplicação apresenta:

* Listagem de **60+ profissionais** carregados via **JSON local**
* Cards com informações essenciais
* Modal com dados completos
* Sistema de busca e filtros
* Dark Mode
* Layout responsivo e moderno

---

## 🧩 **Funcionalidades Principais**

### 📇 **1. Cards de Profissionais**

Cada card exibe:

* Foto
* Nome
* Cargo
* Principais skills técnicas

---

### 🪟 **2. Modal Detalhado**

Ao clicar em um card, abre-se um modal contendo:

* Informações pessoais e acadêmicas
* Experiências profissionais
* Hard Skills e Soft Skills
* Hobbies
* Certificações
* Projetos
* Idiomas
* Interesses
* Botões funcionais:

  * ✔️ **Recomendar profissional**
  * ✔️ **Enviar mensagem**

---

### 🔎 **3. Sistema de Busca e Filtros**

Filtros por:

* Área
* Cidade
* Principais tecnologias

---

### 🌙 **4. Dark Mode**

Toda a interface adapta-se ao tema claro/escuro conforme preferência do usuário.

---

### 🧩 **5. Dados JSON Local**

Arquivo contendo todos os perfis simulados.
Propriedades utilizadas:

* `id`
* `nome`
* `foto`
* `cargo`
* `resumo`
* `localizacao`
* `area`
* `habilidadesTecnicas`
* `softSkills`
* `experiencias`
* `formacao`
* `projetos`
* `certificacoes`
* `idiomas`
* `areaInteresses`

---

## 📂 **Estrutura do Projeto**

```
GS 02 - 2025/
│
├── public/
│   └── assets/
│       ├── fonts/
│       │   ├── Corpta/
│       │   ├── cyrovoid-font/
│       │   └── neubau-pro/
│       │
│       └── imgs/
│           ├── (diversas imagens utilizadas no layout)
│           └── fotosPerfis/
│               ├── homem1.svg
│               ├── homem2.svg
│               ├── homem3.svg
│               ├── homem4.svg
│               ├── homem5.svg
│               ├── mulher1.svg
│               ├── mulher2.svg
│               ├── mulher3.svg
│               ├── mulher4.svg
│               └── mulher5.svg
│
├── src/
│   ├── components/
│   │   ├── ColorChangeButton.jsx
│   │   ├── ColorChangeButton.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Modal.jsx
│   │   └── Modal.css
│   │
│   ├── data/
│   │   └── Perfis.json
│   │
│   ├── Home.jsx
│   ├── Home.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

```

---

## 🛠️ **Tecnologias Utilizadas**

* **React**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **JSON local**

---

## 🔧 **Instalação do Projeto**

### 1. Clone o repositório:

```
git clone https://github.com/YasminAmorimAffonso/GlobalSolution02-2025.git
```

### 2. Acesse a pasta:

```
cd GlobalSolution02-2025
```

### 3. Instale as dependências:

```
npm install
```

### 4. Instale o TailwindCSS:

```
npm install tailwindcss @tailwindcss/vite
```

### 5. Execute o projeto:

```
npm run dev
```

---

## 🌍 **Deploy**

🔗 **Link do Deploy:**
*https://global-solution02-2025.vercel.app*

---

## 📘 **Repositório**

🔗 **Link do Repositório GitHub:**
*https://github.com/YasminAmorimAffonso/GlobalSolution02-2025.git*

---

## 🧑‍🤝‍🧑 **Integrantes do Grupo**

| Nome                     | RM         |
|--------------------------| ---------- |
| Daniel Duarte dos Santos | RM 562508  |
| Nuno Coutinho Henrique   | RM 562438  |
| Yasmin Amorim Affonso    | RM 5636345 |

---
