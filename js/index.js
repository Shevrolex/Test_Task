document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".header__burger-btn").addEventListener("click", function() {
      scrollLock.disablePageScroll();
      document.querySelector(".header__menu").classList.add("active");
    })
    document.querySelector(".header__close").addEventListener("click", function() {
      scrollLock.enablePageScroll();
      document.querySelector(".header__menu").classList.remove("active");
    })


    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value + '%';

    slider.oninput = function() {
    output.innerHTML = this.value + ' %';
    }
})

let inputs = document.querySelectorAll('.wrapper__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.wrapper__file-button-text').innerText;

      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;

        if (countFiles)
          label.querySelector('.wrapper__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.wrapper__file-button-text').innerText = labelVal;
      });
});

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});
