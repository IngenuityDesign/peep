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

jQuery(function ($) {

  function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  } 

  var form = $('form[name="mc-embedded-subscribe-form"]');
  form.attr('action', 'javascript:void(0)');

  form.on('submit', function (e) {
    var email = $('input[name="EMAIL"]', this).val() || "";
    if (validateEmail(email)) {
      var response = $.getJSON( '/subscribe',
      { email: email }, function( response, textStatus ) {
        
        if (response.status == "ok") {
          // Successfully subscribed you to our mailing list
        } else {
          // Something went wrong. Status codes will tell us
          switch (response.data.code) {
            // Individual handlers for codes go here
            case 401:
              // We are already subscribed
              break;
            case 403:
              // Invalid Email Address
              break;
            case 404:
              // List doesn't exist. Something internal went wrong.
              break;
            case 0:
              // Unknown error
              break;
            default:
              // Anythin gelse
              break;
          } // End switch case

        } // End response checking

      }); // End getJSON 

    } else {
      // Email is invalid
      alert("Email is invalid");
    }
    
    e.stopPropagation();
  })
});