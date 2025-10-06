# Angular Blog Animex

Projeto em Angular baseado em um modelo de site de blog de animes e mangá.  
Este projeto serve como base para um blog desenvolvido com Angular, contemplando componentes, rotas e estrutura típica de aplicação web.

![Home](https://raw.githubusercontent.com/pedrossjr/angular-blog-animex/main/public/page.png)

---

## 🛠 Tecnologias usadas

- Angular (CLI) — versão utilizada no projeto original: 18.0.2
- TypeScript
- HTML / CSS
- Ferramentas de teste: Karma / Jasmine

---

## 🚀 Como usar / rodar localmente

### Pré-requisitos

- Node.js (recomendado versão LTS)
- Angular CLI (globalmente instalado)
- npm ou yarn (gerenciador de pacotes)

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/pedrossjr/angular-blog-animex.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd angular-blog-animex
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Para rodar em modo de desenvolvimento (com recarga automática):

   ```bash
   ng serve
   ```

   Em seguida, acesse no navegador:

   ```
   http://localhost:4200/
   ```

5. Para gerar o build de produção:

   ```bash
   ng build
   ```

   Os arquivos de saída estarão no diretório `dist/`.

6. (Opcional) Para rodar testes unitários:
   ```bash
   ng test
   ```
7. (Opcional) Para testes end‑to‑end (E2E):
   ```bash
   ng e2e
   ```

---

## 📂 Estrutura de diretórios (resumo)

```
/
├── public/
├── src/
│   ├── app/            # código-fonte Angular
│   ├── assets/
│   └── styles/
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ Funcionalidades

- Organização modular de componentes
- Rotas para navegação entre páginas do blog
- Estrutura base para posts, listagem, detalhes etc.
- Base sólida para customização e extensão

---

## 📝 Notas adicionais

Este projeto foi gerado com o Angular CLI.  
Para mais comandos e opções, utilize:

```bash
ng help
```

ou consulte a documentação oficial: [Angular CLI Docs](https://angular.dev/tools/cli)

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Silva**  
🔗 [GitHub](https://github.com/pedrossjr)  
🔗 [Linkedin](https://www.linkedin.com/in/pedrosouzasjr/)
