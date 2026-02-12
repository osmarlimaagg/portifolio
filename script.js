document.querySelectorAll('.carrossel-container').forEach(container => {

  const carrossel = container.querySelector('.carrossel');
  const imagens = container.querySelectorAll('.carrossel-imagem');
  const btnPrev = container.querySelector('.prev');
  const btnNext = container.querySelector('.next');

  let index = 0;
  const total = imagens.length;

  function atualizarCarrossel() {
    carrossel.style.transform = `translateX(-${index * 100}%)`;
  }

  btnNext.addEventListener('click', () => {
    index++;
    if (index >= total) index = 0;
    atualizarCarrossel();
  });

  btnPrev.addEventListener('click', () => {
    index--;
    if (index < 0) index = total - 1;
    atualizarCarrossel();
  });

});
