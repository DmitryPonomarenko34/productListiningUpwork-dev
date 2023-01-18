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

console.log('Джс працює!');