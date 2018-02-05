;(function(){

  function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function(){
          var context = this, args = arguments;
          var later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
          }
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if(callNow) func.apply(context, args);
        }
      }



      const sliderImages = document.querySelectorAll('.slidein');

      function checkSlide(e){

        sliderImages.forEach( sliderImage => {
          const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height;
          const imageBottom = sliderImage.offsetTop + sliderImage.height;
          const isHalfShown = slideInAt > sliderImage.offsetTop
          const isNotScrolledPast = window.scrollY < imageBottom;

            if (isNotScrolledPast && isHalfShown) {
              sliderImage.classList.add("active")
            }

        })
      }

      window.addEventListener("scroll", debounce(checkSlide))



      $("#carosel").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{

         breakpoint: 900,
         settings: {
           arrows: false
         }

       }]
      })

      var flag = false;
      //drop menu
      $("#mob").click(function(){
        $(".nav").slideToggle(300)
        flag = !flag;
      })
      $(".nav__link").click(function(){
        var some = "." + $(this).attr("data-position");
        var position = $(some).offset().top;
        $('html, body').animate({scrollTop: position}, 700)
        if(flag){
          $(".nav").slideToggle(300)
          flag = false
        }
  })

}());
