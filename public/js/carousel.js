document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicators = document.querySelectorAll(".indicator");
  const totalItems = indicators.length;
  let currentIndex = 0;

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("opacity-50", index === currentIndex);
      indicator.classList.toggle("opacity-50", index !== currentIndex);
    });
  };

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel(); // Initialize carousel state
});
