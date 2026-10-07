import "./styles/style.css";
import { carregarPosts, enviarPost } from "./controllers/postsController.js";
import { elements } from "./ui/dom.js";

elements.form.addEventListener("submit", enviarPost);
carregarPosts();
