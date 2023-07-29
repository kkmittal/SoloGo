function scrollCards(direction) {
    const container = document.querySelector(".horizontal-scroll-container");
    const scrollAmount = 380; // Adjust the scroll amount as needed

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
    }
  }

function scrollTestimonialCards(direction) {
  const container = document.querySelector(".testimonial-container");
  const cardWidth = 360; // Width of each testimonial card
  const scrollAmount = cardWidth + 16; // 16px for margin-right on testimonial cards
  const framesPerSecond = 60;
  const scrollDuration = 500; // Duration of scrolling animation in milliseconds

  const scrollStep = (scrollAmount / scrollDuration) * framesPerSecond;
  let currentScroll = 0;

  function step() {
    if (currentScroll < scrollAmount) {
      currentScroll += scrollStep;
      container.scrollLeft += direction * scrollStep;
      requestAnimationFrame(step);
    }
  }

  step();
} 

