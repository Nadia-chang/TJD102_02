$(document).ready(function () {
    $('input').focus(function () {
        $(this).css('background-color', 'rgba(249, 244, 218, 1)')
    }).blur(function () {
        $(this).css('background-color', '#FFF')
    })
})

const agreeCheckbox = document.getElementById('agree');
const submitBtn = document.getElementById('submitBtn');

agreeCheckbox.addEventListener('change', function () {
    submitBtn.disabled = !this.checked;
});

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('表單已送出！');
});

$(function(){
  // 1. 點 ☰ 切換主選單
  $('.menu-toggle').on('click', function(){
    $('.nav-menu').toggleClass('open');
  });

  // 2. 手機：點第一層有下拉的項目再展開 / 收合
  $('.has-sub > a').on('click', function(e){
    if(window.innerWidth <= 768){
      e.preventDefault();               // 不跳連結
      $(this).parent().toggleClass('open')
             .siblings('.has-sub').removeClass('open');
    }
  });
});