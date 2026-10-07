import { api } from "../api/client.js";

/**
 * Busca os primeiros `limit` posts.
 * GET /posts?_limit=5
 * Os erros não são tratados aqui: sobem para o controller (try/catch).
 */
export async function getPosts(limit = 5) {
  const { data } = await api.get("/posts", { params: { _limit: limit } });
  return data;
}

/**
 * Cria um novo post.
 * POST /posts
 * A API é fake: devolve o post com um id, mas não o salva de verdade.
 */
export async function createPost({ title, body, userId = 1 }) {
  const { data } = await api.post("/posts", { title, body, userId });
  return data;
}
