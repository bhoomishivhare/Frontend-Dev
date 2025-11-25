// q2.js (jQuery)
// Features:
// 1) click -> highlight background
// 2) hover -> show details
// 3) "favorite" toggles selected class
// 4) style products with discounts using attribute selector
// 5) show alert if product is out of stock (data attribute)

$(function() {
  const $products = $('#products');

  // 4) style products with discounts using attribute selector
  // attribute selector: [data-discount] selects elements with that attribute
  $products.find('.product[data-discount]').each(function() {
    // add a CSS class or inline style (already handled by CSS .discount)
    $(this).addClass('discount');
  });

  // 1) click on a product -> highlight
  $products.on('click', '.product', function(e) {
    // if clicking favorite button, let that handler run instead (stop propagation)
    if ($(e.target).is('.favorite')) return;
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
    // 5) alert if out of stock
    const stock = Number($(this).data('stock'));
    if (stock === 0) {
      alert('This product is out of stock!');
      $(this).addClass('out-of-stock');
    }
  });

  // 2) hover -> show details (mouseenter/mouseleave)
  $products.on('mouseenter', '.product', function() {
    $(this).find('.details').stop(true, true).slideDown(150);
  }).on('mouseleave', '.product', function() {
    $(this).find('.details').stop(true, true).slideUp(120);
  });

  // 3) clicking favorite toggles selected class
  $products.on('click', '.favorite', function(e) {
    e.stopPropagation(); // prevent product click
    $(this).toggleClass('selected');
  });
});// q2.js (jQuery)
// Features:
// 1) click -> highlight background
// 2) hover -> show details
// 3) "favorite" toggles selected class
// 4) style products with discounts using attribute selector
// 5) show alert if product is out of stock (data attribute)

$(function() {
  const $products = $('#products');

  // 4) style products with discounts using attribute selector
  // attribute selector: [data-discount] selects elements with that attribute
  $products.find('.product[data-discount]').each(function() {
    // add a CSS class or inline style (already handled by CSS .discount)
    $(this).addClass('discount');
  });

  // 1) click on a product -> highlight
  $products.on('click', '.product', function(e) {
    // if clicking favorite button, let that handler run instead (stop propagation)
    if ($(e.target).is('.favorite')) return;
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
    // 5) alert if out of stock
    const stock = Number($(this).data('stock'));
    if (stock === 0) {
      alert('This product is out of stock!');
      $(this).addClass('out-of-stock');
    }
  });

  // 2) hover -> show details (mouseenter/mouseleave)
  $products.on('mouseenter', '.product', function() {
    $(this).find('.details').stop(true, true).slideDown(150);
  }).on('mouseleave', '.product', function() {
    $(this).find('.details').stop(true, true).slideUp(120);
  });

  // 3) clicking favorite toggles selected class
  $products.on('click', '.favorite', function(e) {
    e.stopPropagation(); // prevent product click
    $(this).toggleClass('selected');
  });
});
