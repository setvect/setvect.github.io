document.addEventListener("DOMContentLoaded", function () {
  const commentElements = document.querySelectorAll('.comment_count');

  commentElements.forEach(function (element) {
    const pathname = element.getAttribute('data-pathname');
    const repo = element.getAttribute('data-repo');

    fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(pathname)}+type:issue+repo:${repo}`)
      .then(response => response.json())
      .then(data => {
        const commentsCount = data.total_count;
        element.innerText = commentsCount;
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        element.innerText = '0';
      });
  });
});
