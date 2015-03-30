(function($){
  $(function(){

    //$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown({ hover: false });
    $('.button-collapse').sideNav({menuWidth: 240, activationWidth: 70});

  }); // end of document ready
})(jQuery); // end of jQuery name space