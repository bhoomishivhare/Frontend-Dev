// q5.js (jQuery)
// 1) clicking manager highlights direct reports
// 2) hover on employee shows contact using .next() or .find()
// 3) clicking department changes background of its members using .children()
// 4) select random employee -> highlight siblings
// 5) collapse/expand team using .parent() and .find()

$(function() {
  // 1) manager click -> highlight direct reports
  $('#teams').on('click', '.manager', function() {
    const managerId = $(this).data('id');
    // remove previous highlights
    $('.employee').removeClass('highlight');
    // highlight employees with matching data-manager
    $(`.employee[data-manager="${managerId}"]`).addClass('highlight');
  });

  // 2) hover on employee -> show contact info using .find (contact is inside)
  $('#teams').on('mouseenter', '.employee', function() {
    $(this).find('.contact').fadeIn(120);
  }).on('mouseleave', '.employee', function() {
    $(this).find('.contact').fadeOut(80);
  });

  // 3) click on department -> change background of its members using .children()
  $('#teams').on('click', '.deptName', function() {
    const $dept = $(this).closest('.department');
    $dept.children().not(this).toggleClass('highlight'); // toggles highlight for manager + employees
  });

  // 4) select random employee -> highlight siblings
  $('#randomEmployee').on('click', function() {
    const $emps = $('.employee');
    const idx = Math.floor(Math.random() * $emps.length);
    const $selected = $emps.eq(idx);
    // highlight selected and siblings (other employees under same manager)
    const managerId = $selected.data('manager');
    $('.employee').removeClass('highlight');
    $(`.employee[data-manager="${managerId}"]`).addClass('highlight');
  });

  // 5) collapse/expand using parent and find
  $('#collapseTeam').on('click', function() {
    // find all department children (manager + employees) and toggle visibility of employees
    $('.department').each(function() {
      $(this).find('.employee').slideToggle(150);
    });
  });
});
