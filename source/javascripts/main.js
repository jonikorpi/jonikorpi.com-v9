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

  var $container = $("#page-container");

  // Opening viewports

  var openViewport = function($viewport) {
    var viewportID = $viewport.attr("id");
    var $parentViewport = $viewport.parent().closest(".viewport");

    $viewport.removeClass("open-viewport").addClass("active-viewport");
    $parentViewport.addClass("open-viewport").removeClass("active-viewport");
    //$container.addClass(viewportID + "-active");
  };

  $(".viewport-expand-button").on("click", function(event) {
    event.preventDefault();
    openViewport( $(this).closest(".viewport") );
  });

  // Exiting viewports

  var closeViewport = function($viewport) {
    if ( $viewport.hasClass("root-viewport") ) {
      $container.addClass("root-viewport-reached");
      setTimeout(function() {
        $container.removeClass("root-viewport-reached");
      }, 141);
      openViewport($viewport);
    }
    else {
      var viewportID = $viewport.attr("id");
      var $parentViewport = $viewport.parent().closest(".viewport");

      $viewport.removeClass("active-viewport");
      //$container.removeClass(viewportID + "-active");
      openViewport($parentViewport);
    }
  };

  $("body").bind('keyup', 'esc', function(event) {
    //event.preventDefault();
    closeViewport( $(".active-viewport") );
  });

  $(".close-button").on("click", function(event) {
    event.preventDefault();
    closeViewport( $(this).closest(".viewport") );
  });

});
