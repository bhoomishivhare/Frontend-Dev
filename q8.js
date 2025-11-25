// q8.js (jQuery)
// 1) Add new post -> append
// 2) Prepend featured -> prepend
// 3) Remove last -> remove last child
// 4) Add tags using .before()/.after()
// 5) Highlight posts with keyword

$(function() {
  const $posts = $('#posts');

  $('#addPost').on('click', function() {
    const newPost = $('<div class="post">New Post - ' + new Date().toLocaleTimeString() + '</div>');
    $posts.append(newPost);
  });

  $('#prependFeatured').on('click', function() {
    const featured = $('<div class="post highlight">★ Featured Post - ' + new Date().toLocaleTimeString() + '</div>');
    $posts.prepend(featured);
  });

  $('#removeLast').on('click', function() {
    $posts.children().last().remove();
  });

  $('#addTagToAll').on('click', function() {
    const tag = $('#tagText').val().trim();
    if (!tag) return;
    // add a tag before each post title (demonstration of .before())
    $posts.children().each(function() {
      $(this).find('.tag').remove(); // remove old tag if any
      $(this).prepend($('<span class="tag">[' + tag + ']</span>'));
    });
    $('#tagText').val('');
  });

  // highlight posts containing "JavaScript" or user-provided keyword
  $('#posts').on('click', '.post', function() {
    const keyword = prompt('Enter keyword to highlight (e.g., JavaScript):', 'JavaScript');
    if (!keyword) return;
    $posts.children().each(function() {
      const txt = $(this).text();
      if (txt.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
        $(this).addClass('highlight');
      } else {
        $(this).removeClass('highlight');
      }
    });
  });
});
