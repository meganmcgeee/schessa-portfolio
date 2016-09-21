// Initialize Isotope

// external js: isotope.pkgd.js

var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 80
  }
});

grid.addEventListener( 'click', function( event ) {
  var target = event.target;
  // only click on itemContent
  if ( !target.classList.contains('grid-item-content') ) {
    return;
  }
  var itemElem = target.parentNode;
  itemElem.classList.toggle('is-expanded');
  iso.layout();
});
