jQuery( document ).ready( function ( e ) {

  var definedbreakpoint = $("[class*=ok-]").data("breakpoint");

  if(definedbreakpoint) {
  	var breakpoint = definedbreakpoint.replace("px", "");
  }
  else {
  	var breakpoint = "560";
  }

  if ( $(document).width() > breakpoint) {
    $( "a.ok-ribbon" ).addClass( "closed" ).removeAttr('href');

    $('a.ok-ribbon').click(function(e) {
        $(this).toggleClass("closed open");
        $('#ok-panel').toggleClass("closed open");
    });
  }

  $( "body" ).addClass( "has-ok-panel" );
});
