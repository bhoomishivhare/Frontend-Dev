// q6.js (jQuery)
// 1) Subscribe -> enable notifications (mock)
// 2) Unsubscribe -> disable
// 3) Dynamically add topics -> attach .on handlers (event delegation used)
// 4) Remove subscription -> detach with .off()
// 5) Show success message dynamically

$(function() {
  const $subs = $('#subscriptions');
  const $messages = $('#messages');

  // Use event delegation: handlers attached to parent, work for future elements
  $subs.on('click', '.subscribe', function() {
    const topic = $(this).closest('.topic').data('topic');
    // simulate enabling notifications
    $(this).closest('.topic').addClass('subscribed');
    showMessage(`Subscribed to ${topic}`);
  });

  $subs.on('click', '.unsubscribe', function() {
    const $topic = $(this).closest('.topic');
    const topic = $topic.data('topic');
    $topic.removeClass('subscribed');
    showMessage(`Unsubscribed from ${topic}`);
  });

  // 3) dynamically add new subscription topics
  $('#addTopic').on('click', function() {
    const name = $('#newTopic').val().trim();
    if (!name) return showMessage('Enter a topic name', true);
    const $topic = $(`<div class="topic" data-topic="${name}"><span>${name}</span> 
      <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button>
      <button class="remove">Remove</button></div>`);
    $('#dynamicArea').append($topic);
    $('#newTopic').val('');
    showMessage(`Topic "${name}" added`);
    // event handlers for those buttons are already in place due to delegation
  });

  // 4) remove specific subscription topic -> detach using .off() then remove DOM
  $subs.on('click', '.remove', function() {
    const $topic = $(this).closest('.topic');
    const name = $topic.data('topic');
    // Example of detaching events for this element (not strictly necessary because using delegation)
    $topic.off();
    $topic.remove();
    showMessage(`Topic "${name}" removed`);
  });

  function showMessage(text, isError) {
    const $node = $('<div>').text(text).addClass(isError ? 'error' : 'success');
    $messages.prepend($node);
    // auto-remove after 4s
    setTimeout(() => $node.fadeOut(300, () => $node.remove()), 4000);
  }
});
