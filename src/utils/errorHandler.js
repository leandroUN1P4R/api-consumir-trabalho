/**
 * Converte um erro do Axios em uma mensagem amigável para o usuário.
 * O detalhe técnico fica apenas no console.
 */
export function getFriendlyMessage(error) {
  if (error.code === "ECONNABORTED") {
    return "A conexão demorou demais. Tente novamente em instantes.";
  }
  if (error.response) {
    return `O servidor respondeu com um problema (código ${error.response.status}). Tente novamente mais tarde.`;
  }
  if (error.request) {
    return "Não foi possível conectar ao servidor. Verifique sua internet e tente de novo.";
  }
  return "Algo inesperado aconteceu. Tente novamente.";
}
