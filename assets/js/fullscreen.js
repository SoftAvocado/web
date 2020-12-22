// Flickity options, defaults
var options = {
  cellAlign: left
};

// enable prev/next buttons at 768px
if ('flickity-fullscreen') {
  options.cellAlign = center;
}

$('.gallery').flickity( options );