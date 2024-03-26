document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".inner-carousel");

  // Представим, что у нас есть массив URL-адресов изображений
  const images = [
    "img/Rectangle@2x.png",
    "img/kartinka.png",
    "img/Rectangle (2).png",
    "img/Rectangle (3).png",
    "img/Rectangle (4).png",
    "img/Rectangle (5).png",
    "img/Rectangle (6).png",
  ];

  // Создаём HTML для изображений и дублируем его
  let html = images.map((src) => `<img src="${src}" alt="">`).join("");
  html += html; // Дублирование для непрерывного потока
  carousel.innerHTML = html;

  // Функция для инициации движения
  let currentPos = 0;
  const moveCarousel = () => {
    currentPos -= 1;
    if (Math.abs(currentPos) >= carousel.offsetWidth / 2) {
      currentPos = 0;
    }
    carousel.style.transform = `translateX(${currentPos}px)`;
  };

  // Запускаем движение карусели
  setInterval(moveCarousel, 10); // Регулируйте интервал для изменения скорости
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      // Плавная прокрутка с отступом сверху в 100px
      window.scrollTo({
        top: offsetTop - 100, // Уменьшаем целевую позицию на 100 пикселей для отступа
        behavior: "smooth",
      });
    });
  }
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); 
      alert("Вы нажали на кнопку."); 
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
});
