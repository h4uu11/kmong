document.addEventListener("DOMContentLoaded", () => {
  scrollFn();
  AOS.init({
    duration: 1500,
  });
})
function scrollFn() {
  $(window).scroll(function () {
    let isScrollTop = $(window).scrollTop();
    if (isScrollTop != 0 && isScrollTop > 0) {
      $(".header").addClass("scrollDown");
    }
    if (isScrollTop === 0) {
      $(".header").removeClass("scrollDown");
    }
    for(let i = 0; i < $(".target .con").length; i++) {
      let targetTop = $(".target .con").eq(i).offset().top;
      let targetBottom = targetTop + $(".target .con").eq(i).outerHeight();
      let targetWrapTop = $(".target").offset().top;
      let targetWrapBottom = targetWrapTop + $(".target").outerHeight();
      if(isScrollTop >= targetTop && isScrollTop < targetBottom) {
        $(".pageNavi .link").removeClass("active");
        $(".pageNavi .link").eq(i).addClass("active");
        $(".pageNavi").addClass("active");
      } 
      else if(isScrollTop < targetWrapTop || isScrollTop > targetWrapBottom){
        $(".pageNavi .link").removeClass("active");
        $(".pageNavi").removeClass("active");
      }
    }
    
    let con2Top = $(".con2").offset().top;
    if(isScrollTop >= con2Top) {
      $(".down").addClass("active");
    } 
    else{
      $(".down").removeClass("active");
    }
  })
}
