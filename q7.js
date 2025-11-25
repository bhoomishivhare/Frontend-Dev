// q7.js (jQuery)
// 1) keyup filters in real-time
// 2) highlight matched text via .css()
// 3) toggle visibility of non-matching
// 4) show count dynamically
// 5) clear search resets list

$(function() {
  const $courses = $('#courses .course');
  const $count = $('#count');

  $('#search').on('keyup', function() {
    const q = $(this).val().trim().toLowerCase();
    let matched = 0;
    $courses.each(function() {
      const $this = $(this);
      const text = $this.text();
      if (q !== '' && text.toLowerCase().indexOf(q) !== -1) {
        // show and highlight
        $this.show();
        // naive highlight: wrap matched substring — keep simple using css background
        $this.addClass('matched');
        matched++;
      } else if (q === '') {
        // reset
        $this.show();
        $this.removeClass('matched');
      } else {
        // hide non-matching
        $this.hide();
        $this.removeClass('matched');
      }
    });
    $count.text('Matched: ' + matched);
  });

  $('#clear').on('click', function() {
    $('#search').val('').trigger('keyup'); // reset
  });
});
