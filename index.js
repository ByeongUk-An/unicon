new Swiper(".mySwiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    // totalClass: "fraction",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

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

// Project-slide
new Swiper(".mySwiper1", {
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  Naver Map Api
var mapOptions = {
  center: new naver.maps.LatLng(37.55631045990309, 126.97239996028738),
  zoom: 17,
};

var map = new naver.maps.Map("map", mapOptions);
