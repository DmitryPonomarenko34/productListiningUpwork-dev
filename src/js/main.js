(function () {
  const btn = document.querySelectorAll('.faq__item');

  btn.forEach(function (el) {
    el.addEventListener('click', function() {
      const collapseBox = this.querySelector('.grow');

      if (collapseBox.clientHeight) {
        this.classList.remove('open');
        collapseBox.style.height = 0;
      } else {
        var wrapper = this.querySelector('.faq__item-text');
        this.classList.add('open');
        collapseBox.style.height = wrapper.clientHeight + "px";
      }

    })  
  })

  const firstSectionHeight = document.getElementById('firstSection');

  // console.log(firstSectionHeight.clientHeight);
  

  const pricingInput = document.getElementById('pricing-input');
  const pricingLite = document.getElementById('pricing-lite');
  const pricingLiteRange = document.getElementById('pricing-lite-range');
  const pricingPro = document.getElementById('pricing-pro');
  const pricingProRange = document.getElementById('pricing-pro-range');
  
  function inputIsChecked() {
     if (pricingInput.checked) {
      pricingLite.textContent = '39';
      pricingLiteRange.textContent = 'year';
      pricingPro.textContent = '75';
      pricingProRange.textContent = 'year';

      return
    }

    pricingLite.textContent = '49';
    pricingProRange.textContent = 'month';
    pricingLiteRange.textContent = 'month';
    pricingPro.textContent = '99';
  }

  inputIsChecked();

  pricingInput.addEventListener('click', inputIsChecked);
})();