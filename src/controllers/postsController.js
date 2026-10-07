import { getPosts, createPost } from "../services/postsService.js";
import { getFriendlyMessage } from "../utils/errorHandler.js";
import {
  elements,
  renderPosts,
  prependPost,
  setListLoading,
  showListError,
  setSubmitting,
  showFormMessage,
  hideFormMessage,
} from "../ui/dom.js";

/** Carrega e exibe os 5 primeiros posts. */
export async function carregarPosts() {
  setListLoading(true);
  showListError("");
  try {
    const posts = await getPosts(5);
    renderPosts(posts);
  } catch (error) {
    console.error(error);
    showListError(getFriendlyMessage(error));
  } finally {
    setListLoading(false);
  }
}

/** Envia o formulário criando um novo post. */
export async function enviarPost(event) {
  event.preventDefault();
  hideFormMessage();
  setSubmitting(true);
  try {
    const novoPost = await createPost({
      title: elements.titulo.value.trim(),
      body: elements.corpo.value.trim(),
    });
    prependPost(novoPost);
    elements.form.reset();
    showFormMessage(`Post publicado com sucesso! (id ${novoPost.id})`, "ok");
  } catch (error) {
    console.error(error);
    showFormMessage(getFriendlyMessage(error), "error");
  } finally {
    setSubmitting(false);
  }
}
