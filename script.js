console.log("JS file loaded!");
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement;

      // Remove 'active' class from all items except the one clicked
      document.querySelectorAll(".accordion-item").forEach((acc) => {
        if (acc !== item) acc.classList.remove("active");
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // lower is faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = Math.ceil(target / speed);

      if(count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});


  window.addEventListener('load', function () {
    const loader = document.getElementById('preloader');
    loader.style.display = 'none';
  });

