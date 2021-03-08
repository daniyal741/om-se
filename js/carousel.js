$(document).ready(function () {
  $(".slide_container").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    centerMode: false,
    variableWidth: false,
    arrows:false,
    autoplay:true,  
    autoplaySpeed: 2000,


  });
});


$(document).ready(function () {
  $(".reviews_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    centerMode: false,
    variableWidth: false,
    arrows:false,
    autoplay:false,  
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    
      
      //$('.gallery').slick('unslick');
    
    
    ]


  });
});


$(document).ready(function () {
  $(".seen_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    centerMode: false,
    variableWidth: false,
    arrows:false,
    autoplay:false,  
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    
      
      //$('.gallery').slick('unslick');
    
    
    ]


  });
});
