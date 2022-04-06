$(function(){

    $(function(){

        let navBar = $('.navbar01');
        let offsetValue = navBar.offset().top;
       
     
        $(window).scroll(function(){
          let scrTop =  $(window).scrollTop();
     
          if(scrTop > offsetValue){
              navBar.addClass('menufixed');
          } else{
              navBar.removeClass('menufixed');
          }
     
        });
     
     
     });




});