$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
   $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
   });
});
$( ".menu li" ).click(function() {
   $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
   });
});
$( ".cross" ).click(function() {
   $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
   });
});