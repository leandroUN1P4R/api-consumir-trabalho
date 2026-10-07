import axios from "axios";

/**
 * Instância única do Axios, configurada para a JSONPlaceholder.
 * Centralizar aqui evita repetir URL base e timeout em cada requisição.
 */
export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000, // 10 segundos
  headers: { "Content-Type": "application/json" },
});
