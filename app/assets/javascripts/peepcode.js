var ready;
ready = function() {
    $(".phone1").css({'bottom':'135px'});
  setTimeout(function (){
    $(".phone2").css({'bottom':'95px'});
  }, 1000);
    $('#example').tooltip();
    $('#appstore').tooltip();
    $('#gplay').tooltip();
  
  isotope();
  signupOverlay();
  loginOverlay();
  var cbpAnimatedHeader=(function(){var b=document.documentElement,g=document.querySelector(".cbp-af-header"),e=false,a=300;function f(){window.addEventListener("scroll",function(h){if(!e){e=true;setTimeout(d,250)}},false)}function d(){var h=c();if(h>=a){classie.add(g,"cbp-af-header-shrink")}else{classie.remove(g,"cbp-af-header-shrink")}e=false}function c(){return window.pageYOffset||b.scrollTop}f()})();
};

$(document).ready(ready);
$(document).on('page:load', ready);
