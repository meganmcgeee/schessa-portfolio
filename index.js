// Initialize Isotope

// external js: isotope.pkgd.js

$('.grid').isotope({
  layoutMode: 'packery',
  itemSelector: '.grid-item'
});

Array.prototype.forEach.call(document.getElementsByClassName('grid-item'), function(gridItem) {
  gridItem.addEventListener('click', function() {
      div = document.getElementById('more-info');
           div.style.display = "block";
  }, false);
});

function hide(obj) {
    const close = document.getElementById('close');
      close.style.display = 'none';

}
