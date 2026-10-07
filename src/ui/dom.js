/**
 * Camada de interface: só mexe no DOM, não conhece a API.
 */
const $ = (id) => document.getElementById(id);

export const elements = {
  form: $("form"),
  titulo: $("titulo"),
  corpo: $("corpo"),
  botao: $("enviar"),
  formMsg: $("form-msg"),
  lista: $("lista"),
  listaLoading: $("lista-loading"),
  listaErro: $("lista-erro"),
};

function createPostCard(post) {
  const card = document.createElement("article");
  card.className = "card";

  const titulo = document.createElement("h3");
  const corpo = document.createElement("p");
  // textContent evita injeção de HTML
  titulo.textContent = post.title;
  corpo.textContent = post.body;

  card.append(titulo, corpo);
  return card;
}

export function renderPosts(posts) {
  const fragment = document.createDocumentFragment();
  posts.forEach((post) => fragment.appendChild(createPostCard(post)));
  elements.lista.replaceChildren(fragment);
}

export function prependPost(post) {
  elements.lista.prepend(createPostCard(post));
}

export function setListLoading(isLoading) {
  elements.listaLoading.hidden = !isLoading;
}

export function showListError(message) {
  elements.listaErro.textContent = message;
  elements.listaErro.hidden = !message;
}

export function setSubmitting(isSubmitting) {
  elements.botao.disabled = isSubmitting;
  if (isSubmitting) {
    elements.botao.innerHTML = '<span class="spinner"></span> Enviando…';
  } else {
    elements.botao.textContent = "Publicar post";
  }
}

export function showFormMessage(message, type) {
  elements.formMsg.className = `msg ${type}`; // "ok" ou "error"
  elements.formMsg.textContent = message;
  elements.formMsg.hidden = false;
}

export function hideFormMessage() {
  elements.formMsg.hidden = true;
}
