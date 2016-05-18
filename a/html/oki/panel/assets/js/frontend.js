jQuery( document ).ready( function ( e ) {
  if ( $(document).width() > 560) {
    $( "a.ok-ribbon" ).addClass( "closed" ).removeAttr('href');

    $('a.ok-ribbon').click(function(e) {
        $(this).toggleClass("closed open");
        $('#ok-panel').toggleClass("closed open");
    });

    $( "body" ).addClass( "has-ok-panel" );
  }
});
