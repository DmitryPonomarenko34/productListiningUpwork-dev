import raterFunction from "rater-js";

raterFunction({
  element: document.querySelector(".stars"), 
  rateCallback:function rateCallback(rating, done) {
    this.setRating(rating); 
    done(); 
  },
  starSize: 25,
  step:0.5,
});

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