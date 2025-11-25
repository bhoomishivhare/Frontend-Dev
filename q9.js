// q9.js
// Use jQuery.noConflict() so multiple versions don't collide.
// Pattern:
// - After loading v1 then v3, capture references.
// - Use $v1 for legacy (v1.12.4) and $v3 for modern (3.6.4)

var jQuery_v1 = window.jQuery; // after first script loads, this will be overwritten by v3, so capture early is not possible in simple static way
// To reliably capture both, we call noConflict after each load. Here we assume page loads v1 then v3.
// The second include overwrites window.jQuery, so do:
var $v3 = jQuery.noConflict(true); // releases jQuery v3 to $v3 and restores previous jQuery (v1) to window.jQuery
var $v1 = window.jQuery;          // now window.jQuery points to v1

// LEGACY: use $v1 for carousel rotation (simulate)
(function($) {
  // this $ refers to legacy jQuery
  $('#legacy1, #legacy2').each(function(index) {
    // simple rotation highlight every 2s per widget
    const $w = $(this);
    setInterval(() => {
      $w.toggleClass('active');
    }, 2000 + index * 500);
  });
})($v1);

// MODERN: use $v3 for modal/popups and tooltips
(function($) {
  // highlight active widget on click (v3)
  $('#modalBtn').on('click', function() {
    alert('Modal opened (simulated) via jQuery v3');
  });

  // tooltip on hover
  $('#tooltipArea').on('mouseenter', function() {
    const $t = $('<div class="tooltip">This is a tooltip</div>').css({
      position:'absolute', top: $(this).offset().top + 30, left: $(this).offset().left,
      background:'#000', color:'#fff', padding:'4px 8px', borderRadius:'4px', zIndex:9999
    });
    $('body').append($t);
    $(this).data('tooltip', $t);
  }).on('mouseleave', function() {
    const t = $(this).data('tooltip');
    if (t) t.remove();
  });

  // active widget highlighting using v3
  $('#modalBtn, #tooltipArea').on('click', function() {
    $('.widget').removeClass('active');
    $(this).addClass('active');
  });
})($v3);

// Notes:
// - noConflict(true) returned the jQuery v3 reference and restored older jQuery to window.jQuery.
// - We then use two aliases ($v1, $v3) to operate both libraries without collision.
