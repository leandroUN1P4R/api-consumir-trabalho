# JSONPlaceholder + Axios

Projeto de estudo que consome a API de testes [JSONPlaceholder](https://jsonplaceholder.typicode.com/) usando **Axios**, **async/await** e **try/catch**.

## Requisitos atendidos

| Requisito | Onde está |
|---|---|
| Listar os 5 primeiros posts (`/posts?_limit=5`) exibindo título e corpo | `getPosts()` em `src/services/postsService.js` e `renderPosts()` em `src/ui/dom.js` |
| Formulário que envia um novo post via `axios.post` | `index.html` e `createPost()` em `src/services/postsService.js` |
| Indicador de carregamento durante a requisição | `setListLoading()` e `setSubmitting()` em `src/ui/dom.js` |
| Tratamento de erro com mensagem amigável | `getFriendlyMessage()` em `src/utils/errorHandler.js` |
| `async/await` e `try/catch` | `src/controllers/postsController.js` |

## Como executar

Necessário ter o [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção: `npm run build` (saída em `dist/`).

## Estrutura do projeto

```
jsonplaceholder-axios/
├── index.html                      # Estrutura da página (lista + formulário)
├── package.json
├── README.md
└── src/
    ├── main.js                     # Ponto de entrada: liga eventos e carrega os posts
    ├── api/
    │   └── client.js               # Instância do Axios (baseURL, timeout, headers)
    ├── services/
    │   └── postsService.js         # Chamadas HTTP: getPosts e createPost
    ├── controllers/
    │   └── postsController.js      # Fluxo da aplicação: try/catch/finally + loading
    ├── ui/
    │   └── dom.js                  # Manipulação do DOM (cards, loading, mensagens)
    ├── utils/
    │   └── errorHandler.js         # Traduz erros do Axios em mensagens amigáveis
    └── styles/
        └── style.css               # Estilos (inclui tema escuro e foco visível)
```

## Responsabilidade de cada camada

- **api**: configura o Axios uma única vez.
- **services**: só faz requisições e devolve dados; não conhece o DOM.
- **controllers**: orquestra tudo (liga o loading, chama o service, trata o erro, desliga o loading no `finally`).
- **ui**: só altera o DOM; não conhece a API.
- **utils**: funções auxiliares reutilizáveis.

## Como testar o tratamento de erro

Com a página aberta, desligue a internet (ou use a opção "Offline" nas ferramentas do desenvolvedor do navegador) e recarregue a página ou envie o formulário. Uma mensagem em português aparece no lugar do erro técnico, que fica apenas no `console`.

## Observação

A JSONPlaceholder é uma API falsa: o `POST` devolve o post criado com `id` 101, mas **não salva** o dado. Por isso o novo post aparece na tela, mas some ao recarregar a página.
