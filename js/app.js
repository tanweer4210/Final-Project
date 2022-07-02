$(function(){

   // Main Menu Collapse JavaScript Start
   $('#nav_menu_toggler').on('click', function(){
       $('.logo').toggleClass('active');
       $('.nav_item_contianer').toggleClass('active');
   })
   // //Main Menu Collapse JavaScript End

   // Slick Activation JavaScript Start
   $('.banner_item_wrapper').slick({
       prevArrow: $('.prev_arrow'),
       nextArrow: $('.next_arrow')
   });

   $('.service_item_container').slick({
       slidesToShow: 3,
       arrows: false,
       autoplay: true,
       autoplaySpeed: 2500,
       speed: 500,
       responsive: [
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 2
               }
           },
           {
               breakpoint: 480,
               settings: {
                   slidesToShow: 1
               }
           }
       ]
   });

   // Portfolio Section JavaScript Start
   $('.portfolio_item_container').slick({
       slidesToShow: 4,
       arrows: false,
       responsive: [
           {
               breakpoint: 992,
               settings: {
                   slidesToShow: 3
               }
           },
           {
               breakpoint: 576,
               settings: {
                   slidesToShow: 1,
                   autoplay: true,
                   autoplaySpeed: 2500,
                   speed: 500
               }
           }
       ]
   });
   // //Portfolio Section JavaScript End

   // Company Logo Section JavaScript Start
   $('.logoItem_wrapper').slick({
       slidesToShow: 5,
       centerMode: true,
       centerPadding: '0px',
       prevArrow: $('.c_prev_arrow'),
       nextArrow: $('.c_next_arrow'),
       responsive: [
           {
               breakpoint: 576,
               settings: {
                   slidesToShow: 3
               }
           }
       ]
   });
   $('.blog_item_wrapper').slick({
       slidesToShow: 3,
       centerMode: true,
       centerPadding: 0,
       prevArrow: $('.blog_prev_arrow'),
       nextArrow: $('.blog_next_arrow'),
       responsive: [
           {
               breakpoint: 992,
               settings: {
                   slidesToShow: 2
               }
           },
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 1,
                   autoplay: true,
                   autoplaySpeed: 2500,
                   speed: 500
               }
           }
       ]
   });

   $('.testimonial_desc_item_wrapper').slick({
       slidesToShow: 1,
       arrows: false,
       asNavFor: '.testimonial_author_item_wrapper',
       fade: true
   })

   $('.testimonial_author_item_wrapper').slick({
       slidesToShow: 3,
       centerMode: true,
       prevArrow: $('.testimonial_prev_arrow'),
       nextArrow: $('.testimonial_next_arrow'),
       asNavFor: '.testimonial_desc_item_wrapper',
       responsive: [
           {
               breakpoint: 1270,
               settings: {
                   centerPadding: '0px'
               }
           }
       ]
   })

   $('.ourTeam_item_wrapper').slick({
       slidesToShow: 3,
       centerMode: true,
       centerPadding: 0,
       prevArrow: $('.ourTeam_prev_arrow'),
       nextArrow: $('.ourTeam_next_arrow'),
   })
   // //Slick Activation JavaScript End

   // CounterUp Activation JavaScript Start
   $('.countUp').counterUp();
   // //CounterUp Activation JavaScript End
})