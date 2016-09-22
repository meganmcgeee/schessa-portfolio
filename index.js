// Initialize Isotope

// external js: isotope.pkgd.js

$('.grid').isotope({
  layoutMode: 'packery',
  itemSelector: '.grid-item'
});

$('.grid-item').click(function(){
  var $this = $(this),
      tileStyle = $this.hasClass('big') ? { width: 50, height: 50} : { width: 170, height: 110};
  $this.toggleClass('big');

  $this.find('.grid-content').stop().animate( tileStyle );

  $container.isotope( 'reLayout' )

});
