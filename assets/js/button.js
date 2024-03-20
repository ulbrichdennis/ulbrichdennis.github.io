function scrollToTop() {
  $('html, body').animate({ scrollTop: 0 }, 400);
  return false;
}

function toggleScrollToTopButton() {
  var threshold = 200;
  if ($(window).scrollTop() > threshold) {
    $('#scroll-to-top').fadeIn('slow');
  } else {
    $('#scroll-to-top').fadeOut('slow');
  }
}

$(document).ready(function () {
  $('#scroll-to-top').click(scrollToTop);
  $(window).scroll(toggleScrollToTopButton);
});