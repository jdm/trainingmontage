function findContainer(elem) {
  while (!$(elem).hasClass('step')) {
    elem = elem.parentNode;
  }
  return elem;
}

$(document).ready(function() {
  $('.button').click(function(ev) {
    var next = ev.target.getAttribute('next');
    if (next) {
      $(findContainer(ev.target)).hide();
      $('#' + next).show();
    } else {
      var toUnhide = ev.target.getAttribute('unhide');
      $('#' + toUnhide).fadeIn();
    }
  });
});