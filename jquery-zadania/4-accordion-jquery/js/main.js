$(document).ready(function(){
   $(".accordion-item").click(function () {
       if ($(this).hasClass("opened")) {
            ($(this).removeClass("opened"));
            ($(this).find(".accordion-content").slideUp());
       } else {
           ($(this).addClass("opened"));
           ($(this).find(".accordion-content").slideDown());
       }
   })
});