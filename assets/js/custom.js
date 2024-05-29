document.addEventListener("DOMContentLoaded", function () {
  var disqusShortname = '{{ site.disqus.shortname }}';
  var disqusIdentifierElements = document.querySelectorAll(".comment-count");

  if (disqusIdentifierElements.length > 0) {
    var script = document.createElement('script');
    script.src = 'https://' + disqusShortname + '.disqus.com/count.js';
    script.id = 'dsq-count-scr';
    document.body.appendChild(script);
  }

  disqusIdentifierElements.forEach(function (element) {
    var identifier = element.getAttribute('data-disqus-identifier');
    element.innerHTML = '<a href="' + identifier + '#disqus_thread">Comments</a>';
  });
});
