const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  autoplay: {
    delay: 1000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    totalClass: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Port-View

function tabopen(i) {
  $(".p-list").removeClass("active");
  $(".p-list").eq(i).addClass("active");
  $(".data-img").removeClass("active-img");
  $(".data-img").eq(i).addClass("active-img");
}

$(".p-list").click(function (e) {
  tabopen(e.currentTarget.dataset.li);
});
