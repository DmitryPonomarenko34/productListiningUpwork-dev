const btn = document.querySelectorAll('.faq__item');

btn.forEach(function (el) {
  el.addEventListener('click', function(e) {
  const collapseBox = this.querySelector('.grow');

    if (this.classList.contains('open')) {
      this.classList.remove('open');
    } else {
      this.classList.add('open');
    }

   if (collapseBox.clientHeight) {
    collapseBox.style.height = 0;
  } else {
    var wrapper = document.querySelector('.faq__item-text');
    collapseBox.style.height = wrapper.clientHeight + "px";
  }
})  
})

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});