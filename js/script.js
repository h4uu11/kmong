document.addEventListener("DOMContentLoaded", () => {
  scrollFn();
  AOS.init({
    duration: 1500,
  });

  $(".menuOpen").click(function () {
    $(this).toggleClass("on");
    $(".header .right").toggleClass("on");
  });

  $(".dropdown .drop").click(function () {
    $(this).parent().toggleClass("on");
  });

  new Swiper(".mainVisualSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  new Swiper(".weAreInstagramSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
  });
  new Swiper(".studiosSwiper .swiper", {
    pagination: {
      el: ".studiosSwiper .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".studiosSwiper .swiper-button-next",
      prevEl: ".studiosSwiper .swiper-button-prev",
    },
  });
  new Swiper(".equipmentSwiper .swiper", {
    pagination: {
      el: ".equipmentSwiper .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".equipmentSwiper .swiper-button-next",
      prevEl: ".equipmentSwiper .swiper-button-prev",
    },
  });
  $(".tab_header").each(function (element) {
    var slider_width,
      tab_width,
      left_position,
      $active,
      $content,
      $links = $(this).find(".tab_list"),
      $currentTab = $(this).find("a.on");

    $active = $(
      $links.filter('[href="' + location.hash + '"]')[0] || $links[0]
    );
    $active.addClass("on");
    $content = $($active[0].hash);
    $links.not($active).each(function () {
      $(this.hash).hide();
    });
    $(this).on("click", "a", function (e) {
      $active.removeClass("on");
      $content.hide();
      $active = $(this);
      $content = $(this.hash);
      $active.addClass("on");
      $content.show();
      e.preventDefault();
    });
  });
});
function scrollFn() {
  $(window).scroll(function () {
    let isScrollTop = $(window).scrollTop();

    if (isScrollTop != 0 && isScrollTop > 0) {
      $(".header").addClass("scrollDown");
    }
    if (isScrollTop === 0) {
      $(".header").removeClass("scrollDown");
    }
  });
}
