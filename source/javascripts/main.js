//= require_tree .
$(function() {

  // Fallbacks for browsers that claim to support @font-face, but actually don't
  if (!!navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(webOS)|(UCWEB)|(Windows Phone OS 7)|(XBLWP7)|(ZuneWP7)/)) {
    $("html").removeClass("fontface").addClass("no-fontface");
  }

  // Fastclick
  $(function() {
    FastClick.attach(document.body);
  });


  //
  // Viewports
  //

  var $allViewports = $(".viewport");
  var $container = $("#page-container");

  $(".viewport-expand-button").on("click", function(event) {
    event.preventDefault();
    var $viewport = $(this).closest(".viewport");
    var viewportID = $viewport.attr("id");

    if ( $container.hasClass("all-categories-mode") ) {
      $container.removeClass();
      $viewport.addClass("active-viewport");
    }
  });


  //
  // Exiting viewport
  //

  $("body").bind('keydown', 'esc', function(event) {
    //event.preventDefault();
    $allViewports.removeClass("active-viewport");
    $container.addClass("all-categories-mode");
  });

  $(".close-button").on("click", function(event) {
    event.preventDefault();
    $allViewports.removeClass("active-viewport");
    $container.addClass("all-categories-mode");
  });

});
