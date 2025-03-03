// Filtrando a lista de gatos:

// Você está trabalhando em um sistema de upload de fotos de gatos e precisa
// implementar uma função JavaScript que filtre uma lista de gatos por cor.
// A função deve receber como parâmetros a lista de gatos e a cor desejada,
// retornando uma nova lista contendo apenas os gatos que são da cor especificada.

// Resolução do Exercício:

function filtraGatosPelaCor(listaDeGatos, corDoPelo) {
  return listaDeGatos.filter((gato) => gato.cor === corDoPelo);
}
