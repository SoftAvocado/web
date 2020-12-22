// Flickity options, defaults
var options = {
  cellAlign: left
};
flkty.on( 'fullscreenChange', function( isFullscreen ) {
  options.cellAlign = center;
  options.draggable = false;
} );

$('.gallery').flickity( options );