// header mobile menu------------
document.getElementById("menu-icon").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".navlist").classList.toggle("open");
});

const navLinks = document.querySelectorAll(".navlist a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    document.querySelector(".navlist").classList.remove("open");
    document.getElementById("menu-icon").classList.remove("active");
  });
});
const currentPage = window.location.pathname.split("/").pop();
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

//home banner swiper------------
var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

//home accommodation swiper------------
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

//home testimonial swiper------------

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
