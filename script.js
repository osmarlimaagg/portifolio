let index = 0;  // Índice da imagem atual
const carrossel = document.querySelector('.carrossel');  // Seleciona o contêiner do carrossel
const totalImagens = document.querySelectorAll('.carrossel-imagem').length;  // Conta o número total de imagens

function moverCarrossel(direcao) {
  // Atualiza o índice baseado na direção (1 para avançar, -1 para voltar)
  index += direcao;

  // Se o índice for menor que 0, volta para a última imagem
  if (index < 0) {
    index = totalImagens - 1;
  }

  // Se o índice for maior que o número total de imagens, vai para a primeira
  if (index >= totalImagens) {
    index = 0;
  }

  // Atualiza o carrossel para a posição da imagem correspondente
  carrossel.style.transform = `translateX(-${index * 100}%)`;
}

// Avança automaticamente a cada 4 segundos
