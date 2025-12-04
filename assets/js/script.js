document.addEventListener('DOMContentLoaded', function() {
  const slide = document.querySelector('.carousel-slide');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  let counter = 0;
  const size = items[0].clientWidth;
  
  // Posiciona o carrossel no primeiro slide
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
  // Botão próximo
  nextBtn.addEventListener('click', () => {
      if (counter >= items.length - 1) {
          counter = -1; // Para fazer o loop contínuo
      }
      slide.style.transition = "transform 0.5s ease";
      counter++;
      slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      updateIndicators();
  });
  
  // Botão anterior
  prevBtn.addEventListener('click', () => {
      if (counter <= 0) {
          counter = items.length; // Para fazer o loop contínuo
      }
      slide.style.transition = "transform 0.5s ease";
      counter--;
      slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      updateIndicators();
  });
  
  // Atualiza os indicadores
  function updateIndicators() {
      indicators.forEach((indicator, index) => {
          if (index === counter) {
              indicator.classList.add('active');
          } else {
              indicator.classList.remove('active');
          }
      });
  }
  
  // Navegação por indicadores
  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          slide.style.transition = "transform 0.5s ease";
          counter = index;
          slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
          updateIndicators();
      });
  });
  
  // Redimensionamento da janela
  window.addEventListener('resize', () => {
      slide.style.transition = "none";
      const newSize = items[0].clientWidth;
      slide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
  });
  
  // Auto-play (opcional)
  let autoPlay = setInterval(() => {
      nextBtn.click();
  }, 5000);
  
  // Pausa o auto-play quando o mouse está sobre o carrossel
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(autoPlay);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
      autoPlay = setInterval(() => {
          nextBtn.click();
      }, 5000);
  });
});
