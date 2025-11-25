// q4.js (jQuery)
// Controls to hide/show/slide/fade banners; rotate every 5 seconds using fadeIn/fadeOut.

$(function() {
  const $banners = $('#banners .banner');
  let rotationTimer = null;
  let currentIndex = 0;

  $('#hideBanners').on('click', function() { $banners.hide(); });
  $('#showBanners').on('click', function() { $banners.show(); });

  // Slide toggle on the entire banner list
  $('#slideToggle').on('click', function() {
    $('#banners').children().first().slideToggle(300);
  });

  // Fade in/out all banners
  $('#fadeToggle').on('click', function() {
    $banners.fadeToggle(400);
  });

  // Automatic rotate every 5 seconds
  $('#manualRotate').on('click', function() {
    if (rotationTimer) {
      clearInterval(rotationTimer);
      rotationTimer = null;
      $(this).text('Start Rotation');
      // bring all back to visible
      $banners.show();
      return;
    }
    $(this).text('Stop Rotation');
    currentIndex = 0;
    // initially hide all then fade in the first
    $banners.hide();
    $banners.eq(currentIndex).fadeIn(400);
    rotationTimer = setInterval(function() {
      $banners.eq(currentIndex).fadeOut(400, function() {
        currentIndex = (currentIndex + 1) % $banners.length;
        $banners.eq(currentIndex).fadeIn(400);
      });
    }, 5000);
  });

  // Clean up on page unload (good practice)
  $(window).on('beforeunload', function() {
    if (rotationTimer) clearInterval(rotationTimer);
  });
});
