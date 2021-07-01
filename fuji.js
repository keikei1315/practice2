
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('menubutton').addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
  })
});


const targetElement = document.querySelectorAll(".animation");
console.log("画面の高さ",window.innerHeight);
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if (window.innerHeight > getElementDistance){
      targetElement[i].classList.add("show");
    }
  }
})

const targetElement1 = document.querySelectorAll(".pictureAll");
window.onload = function() {
  for (let i = 0; i < targetElement1.length; i++){
    document.querySelectorAll('.pictureAll')[i].classList.add('open');
  }
}

$(function () {
  var topBtn = $('#topButton');
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スルスルっとスクロールでトップへもどる
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});




