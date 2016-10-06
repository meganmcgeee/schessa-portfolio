/* global $ */

// Initialize Isotope
// external js: isotope.pkgd.js
$(function onPageLoaded() {
  $('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item'
  });
});
