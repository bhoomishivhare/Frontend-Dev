// q1.js (requires jQuery)
// On DOM ready show a time-based greeting, allow change, toggle and click alert.

$(function() {
  const $welcome = $('#welcome');

  // 1) On page load -> personalized greeting based on time
  function getTimeGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning! ☀️';
    if (hour < 17) return 'Good Afternoon! 🌤️';
    return 'Good Evening! 🌙';
  }
  $welcome.text(getTimeGreeting());

  // 2) "Change Greeting" -> motivational quote
  $('#changeGreeting').on('click', function() {
    $welcome.text('Keep going — small steps every day add up! 💪');
  });

  // 3) Toggle visibility of welcome message
  $('#toggleWelcome').on('click', function() {
    $welcome.toggleClass('hidden'); // CSS .hidden controls display
  });

  // 4) Show an alert when greeting is clicked
  $welcome.on('click', function() {
    alert($welcome.text());
  });

  // Accessibility: log when toggled
  $('#toggleWelcome').on('click', function() {
    $('#timeHint').text($welcome.is(':visible') ? 'Welcome visible' : 'Welcome hidden');
  });
});
