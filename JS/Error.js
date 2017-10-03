var seconds=14;var foo;function redirect(){window.open('https://vtecx.iego.net','_self');}
function updateSecs(){document.getElementById("seconds").innerHTML=seconds;seconds--;if(seconds==-1){clearInterval(foo);redirect();}}
function countdownTimer(){foo=setInterval(function(){updateSecs()},966);}
countdownTimer();

// This .js file was created by PI (tjxpi.com). Copyright 2017 PI. All rights reserved.
