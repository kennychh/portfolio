window.onscroll = function() {myFunction()};

var lt_button = document.getElementById("lt_button");
var lt_top = lt_button.offsetTop;
var build = true;
var mini = document.createElement('div');
mini.className = 'lt_mini'
var img = document.createElement('img');
img.src = './images/message-circle.svg'
img.style.height = '25px'
img.style.width - '25px'
mini.appendChild(img)
function myFunction() {
  if (window.pageYOffset > lt_top && build) {
    $('body').append(mini)
    mini.style.animationName = 'slidein'
    build = false
  }
  else if (window.pageYOffset <= lt_top){
    mini.style.animationName = 'slideout'
  }
  else {
    mini.style.animationName = 'slidein'
  }
}
