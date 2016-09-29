// Initialize Isotope

// external js: isotope.pkgd.js
$(function onPageLoaded() {

  $('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item'
  });

  // Array.prototype.forEach.call(document.getElementsByClassName('grid-item'), function(gridItem) {
  //   gridItem.addEventListener('click', function() {
  //     document.getElementById('more-info').style.display = 'block';
  //   }, false);
  // });
  //
  // document.getElementById('close').addEventListener('click', function() {
  //   document.getElementById('more-info').style.display = 'none';
  // });

});
