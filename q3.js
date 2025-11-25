// q3.js (jQuery)
// FAQ behaviors:
// 1) click question -> toggle answer visibility
// 2) hover -> change question color
// 3) double-click question -> collapse all answers
// 4) focus on input -> highlight parent question
// 5) blur -> reset background

$(function() {
  const $faq = $('#faq');

  // 1) toggle on click
  $faq.on('click', '.question', function() {
    $(this).next('.answer').slideToggle(150);
  });

  // 2) hover to change color (mouseenter/mouseleave)
  $faq.on('mouseenter', '.question', function() {
    $(this).css('color', '#0056b3');
  }).on('mouseleave', '.question', function() {
    $(this).css('color', '');
  });

  // 3) double-click to collapse all answers
  $faq.on('dblclick', '.question', function() {
    $faq.find('.answer').slideUp(120);
  });

  // 4 & 5 focus/blur on answer input (delegated)
  $faq.on('focus', '.answer-input', function() {
    // highlight parent question using .prev()
    $(this).closest('article').find('.question').addClass('focused');
  }).on('blur', '.answer-input', function() {
    $(this).closest('article').find('.question').removeClass('focused');
  });
});
