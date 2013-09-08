//= require_tree .
$(function() {

  // Bind toggle switches
  $('.toggle-switch').on('click', function(event) {
    event.preventDefault();
    $this = $(this);
    $target = $this.attr('data-toggle-target');
    $this.toggleClass("toggled-switch");
    if ($target == '$next-sibling') {
      $this.next().toggle();
    }
    else if ($target == '$previous-sibling') {
      $this.next().toggle();
    }
    else {
      $($target).toggle();
    }
  });


  // Fallbacks for browsers that claim to support @font-face, but actually don't
  if (!!navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(webOS)|(UCWEB)|(Windows Phone OS 7)|(XBLWP7)|(ZuneWP7)/)) {
    $("html").removeClass("fontface").addClass("no-fontface");
  }

  // Smooth scrolling to targets
  var scrollTime    = 414,
      scrollElement = "html,body";

  $(".in-page-link").on("click", function(event) {
    event.preventDefault();
    var $this   = $(this),
        target  = this.hash,
        $target = $(target);

    $(scrollElement).stop().animate({
      "scrollTop": $target.offset().top
    }, scrollTime, "swing", function () {
      window.location.hash = target;
    });
  });

});
