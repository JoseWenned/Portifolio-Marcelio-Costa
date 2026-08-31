# Portfólio Profissional — Marcélio Costa Ribeiro

Portfólio profissional desenvolvido para **Marcélio Costa Ribeiro**, com o objetivo de apresentar sua experiência profissional, atuação em campo, habilidades e informações de contato de forma moderna, responsiva e acessível.

O projeto foi desenvolvido utilizando **Next.js, React, TypeScript, SCSS e Framer Motion**, seguindo uma estrutura organizada por componentes e priorizando boas práticas de desenvolvimento frontend.

---

## 🚀 Tecnologias utilizadas

* **Next.js 16.3.3**
* **React 19.2.8**
* **TypeScript**
* **SCSS / Sass**
* **Framer Motion**
* **Vitest**
* **Testing Library**
* **ESLint**
* **Git / GitHub**
* **Vercel**

---

## 🎯 Objetivo do projeto

O projeto tem como finalidade criar uma apresentação profissional para Marcélio Costa Ribeiro, destacando:

* Experiência profissional;
* Operação de retroescavadeiras;
* Experiência em montagem de estruturas;
* Atuação no setor de energia eólica;
* Experiência em operações de campo;
* Formação profissional;
* Informações de contato;
* Currículo profissional para download.

O projeto foi desenvolvido pensando principalmente em **recrutadores, empresas e possíveis contratantes** que desejam conhecer rapidamente o perfil profissional do candidato.

---

## 🖥️ Estrutura do portfólio

O site foi dividido em diferentes seções para facilitar a navegação:

* **Header**
* **Hero**
* **Sobre**
* **Habilidades**
* **Projetos**
* **Formação**
* **Experiência**
* **Certificações**
* **Contato**
* **Footer**

A navegação utiliza âncoras internas para permitir que o usuário acesse rapidamente cada seção.

---

## 🧩 Componentes desenvolvidos

### Header

Foi desenvolvido um cabeçalho fixo para facilitar a navegação pelo portfólio.

O menu possui acesso às principais seções:

* Sobre
* Habilidades
* Projetos
* Formação
* Experiência
* Certificações
* Contato

O Header foi estruturado para permanecer funcional em diferentes tamanhos de tela.

---

### Hero

A seção Hero funciona como a apresentação principal do profissional.

Foram implementados:

* Nome profissional;
* Cargo de Operador de Retroescavadeiras;
* Descrição profissional;
* Foto de Marcélio;
* Botão de contato via WhatsApp;
* Botão para acessar a experiência profissional;
* Botão para download do currículo;
* Indicador de rolagem;
* Elementos visuais decorativos;
* Animações utilizando Framer Motion.

O botão **"Entrar em contato"** direciona o usuário diretamente para o WhatsApp profissional.

O currículo profissional é disponibilizado em PDF dentro da aplicação e pode ser baixado diretamente pelo usuário.

---

### Sobre

A seção Sobre apresenta uma introdução profissional de Marcélio, destacando sua experiência e atuação profissional.

A estrutura foi criada para apresentar as principais características do profissional de maneira objetiva.

---

### Habilidades

A seção de habilidades apresenta as principais competências profissionais relacionadas à atuação de Marcélio.

As informações foram organizadas para facilitar a leitura e permitir que empresas identifiquem rapidamente suas áreas de experiência.

---

### Experiência

A seção de experiência apresenta a trajetória profissional de Marcélio.

A estrutura foi criada para organizar as informações de experiência profissional de forma cronológica e visualmente clara.

---

### Formação

A seção Formação apresenta os dados relacionados à formação profissional.

---

### Certificações

A seção Certificações foi estruturada para apresentar cursos e certificações relevantes para a atuação profissional.

---

### Contato

Foi criada uma seção específica para facilitar o contato com Marcélio.

O botão principal direciona o usuário para o WhatsApp através de um link externo:

```text
https://wa.me/+5588993123024
```

O link utiliza:

```html
target="_blank"
rel="noopener noreferrer"
```

Dessa forma, o WhatsApp é aberto em uma nova aba sem permitir que a nova página tenha acesso à página de origem através de `window.opener`.

---

### Footer

O rodapé apresenta:

* Identidade visual;
* Descrição profissional;
* Navegação;
* Link para contato;
* Ano atual automaticamente;
* Localização.

O ano do copyright é gerado dinamicamente através de:

```tsx
new Date().getFullYear()
```

---

# 🎨 Identidade visual

O projeto utiliza uma identidade visual baseada principalmente em:

* Preto;
* Cinza;
* Branco;
* Amarelo.

Foram criadas variáveis SCSS para centralizar as principais propriedades visuais do projeto.

Exemplo:

```scss
$color-black: #0a0a0a;
$color-black-light: #141414;
$color-black-card: #1e1e1e;
$color-yellow: #f5c400;
$color-yellow-light: #ffd21a;
$color-white: #f5f5f5;
$color-gray: #a3a3a3;
$color-gray-dark: #333333;
```

Essa abordagem facilita a manutenção e a padronização da interface.

---

# 📱 Responsividade

O layout foi desenvolvido seguindo uma abordagem responsiva.

Foram definidos diferentes comportamentos para:

* Mobile;
* Mobile pequeno;
* Tablet;
* Desktop;
* Desktop grande.

O Hero, por exemplo, utiliza diferentes layouts conforme o tamanho da tela.

No mobile, o conteúdo é organizado verticalmente.

Em telas maiores, o conteúdo passa a utilizar uma estrutura em duas colunas, separando o texto da apresentação visual.

---

# ✨ Animações

O projeto utiliza **Framer Motion** para criar animações de entrada e interação.

Foram utilizados diferentes variants, incluindo:

* `fadeUp`
* `fadeRight`
* `fadeLeft`
* `scaleIn`
* `staggerContainer`

Essas animações são utilizadas em componentes como:

* Hero;
* Footer;
* Contact;
* Outros elementos da interface.

Também foi considerado o recurso:

```css
@media (prefers-reduced-motion: reduce)
```

para reduzir efeitos de movimento quando essa preferência estiver habilitada no sistema do usuário.

---

# ♿ Acessibilidade

O projeto utiliza recursos de acessibilidade para melhorar a experiência dos usuários.

Entre eles:

* `aria-labelledby`;
* `aria-label`;
* `aria-hidden`;
* Estrutura semântica com `section`, `nav`, `footer`;
* Hierarquia de títulos;
* Textos alternativos nas imagens;
* Links identificáveis por leitores de tela;
* Estados de foco utilizando `:focus-visible`.

Exemplo:

```tsx
<section
  aria-labelledby="hero-title"
>
```

E:

```tsx
<Image
  src={profile}
  alt="Marcélio Costa Ribeiro"
/>
```

---

# 📄 Currículo

O currículo profissional de Marcélio foi incorporado ao projeto como um arquivo PDF.

O documento está localizado em:

```text
src/assets/docs/curriculo.pdf
```

O portfólio disponibiliza uma ação para que o visitante possa baixar o currículo diretamente pelo site.

---

# 📲 Integração com WhatsApp

O portfólio possui integração direta com o WhatsApp.

O botão de contato utiliza o padrão:

```text
https://wa.me/5588993123024
```

Essa integração está presente nas principais áreas de contato do projeto, permitindo que o visitante entre em contato rapidamente.

---

# 🧪 Testes

O projeto utiliza:

* **Vitest**
* **Testing Library**
* **jest-dom**

Os testes foram criados para validar o comportamento dos componentes.

Entre os componentes testados estão:

* Hero;
* Footer;
* Contact.

Os testes verificam elementos como:

* Renderização dos componentes;
* Títulos;
* Textos;
* Links;
* URLs;
* Âncoras;
* Atributos HTML;
* Links externos;
* Imagens;
* Textos alternativos;
* Elementos decorativos;
* Ano do copyright.

Para executar os testes:

```bash
npm run test
```

---

# 🔍 Lint

O projeto utiliza ESLint para análise estática do código.

Para executar:

```bash
npm run lint
```

O ESLint ajuda a identificar problemas como:

* Variáveis não utilizadas;
* Problemas de sintaxe;
* Más práticas;
* Problemas relacionados ao TypeScript;
* Problemas específicos do Next.js.

---

# 🏗️ Build de produção

Antes do deploy, o projeto foi validado utilizando:

```bash
npm run build
```

O processo de build executa:

1. Compilação do projeto;
2. Verificação do TypeScript;
3. Coleta dos dados das páginas;
4. Geração das páginas estáticas;
5. Otimização da aplicação;
6. Finalização da build de produção.

O projeto apresentou build de produção concluída com sucesso.

---

# 📁 Estrutura do projeto

A estrutura principal segue uma organização baseada em componentes:

```text
marcelio-portfolio/
│
├── src/
│   │
│   ├── animations/
│   │   └── variants.ts
│   │
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── ...
│   │
│   ├── assets/
│   │   ├── docs/
│   │   │   └── curriculo.pdf
│   │   │
│   │   └── profile/
│   │       └── profile.jpeg
│   │
│   ├── components/
│   │   │
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   └── Footer/
│   │
│   └── styles/
│       ├── variables.scss
│       └── ...
│
├── public/
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── README.md
```

---

# 📦 Scripts disponíveis

O projeto possui os seguintes comandos:

### Desenvolvimento

```bash
npm run dev
```

Executa o servidor de desenvolvimento do Next.js.

---

### Build

```bash
npm run build
```

Gera a versão otimizada para produção.

---

### Produção

```bash
npm run start
```

Executa a aplicação utilizando a build de produção.

---

### Lint

```bash
npm run lint
```

Executa a análise estática do código.

---

### Testes

```bash
npm run test
```

Executa os testes automatizados utilizando Vitest.

---

# 🔧 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd marcelio-portfolio
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

A aplicação ficará disponível localmente no endereço:

```text
http://localhost:3000
```

---

# 🌐 Deploy

O projeto foi preparado para hospedagem utilizando **Vercel**.

O processo de deploy utiliza integração entre:

```text
GitHub
   ↓
Repository
   ↓
Vercel
   ↓
Next.js
   ↓
Produção
```

A Vercel realiza o processo de build e disponibiliza a aplicação em ambiente de produção.

---

# 🔄 Fluxo de desenvolvimento

O desenvolvimento do projeto seguiu uma abordagem baseada em componentes.

Fluxo utilizado:

```text
Planejamento
     ↓
Estrutura do projeto
     ↓
Desenvolvimento dos componentes
     ↓
Estilização com SCSS
     ↓
Responsividade
     ↓
Animações
     ↓
Acessibilidade
     ↓
Testes
     ↓
Lint
     ↓
Build
     ↓
Git Commit
     ↓
GitHub
     ↓
Vercel
     ↓
Deploy
```

---

# 📌 Boas práticas aplicadas

Durante o desenvolvimento foram aplicadas práticas como:

* Componentização;
* Separação de responsabilidades;
* TypeScript;
* SCSS modularizado;
* Variáveis de estilo;
* Animações reutilizáveis;
* HTML semântico;
* Acessibilidade;
* Responsividade;
* Testes automatizados;
* ESLint;
* Build de produção;
* Controle de versão com Git;
* Deploy utilizando Vercel.

---

# 👨‍💻 Profissional

**Marcélio Costa Ribeiro**

**Operador de Retroescavadeiras**

Profissional com experiência em operação de retroescavadeiras, montagem de estruturas, energia eólica e operações em campo.

---

# 📞 Contato

Para entrar em contato profissionalmente, utilize o botão de WhatsApp disponível no portfólio.

---

## 📄 Licença

Este projeto foi desenvolvido especificamente para apresentação profissional de **Marcélio Costa Ribeiro**.

O conteúdo, informações profissionais, fotografia e currículo pertencem ao respectivo profissional.
