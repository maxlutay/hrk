var anchor = document.getElementById('anchor');

var body = document.getElementsByTagName('body')[0];
var bodywidth = function(){ return body.style.width;};



var link_0 = document.getElementsByTagName('a')[0];




anchor.addEventListener('mouseover',function(){body.style.background = "white";})
anchor.addEventListener('mouseout',function(){body.style.background = "gray";})

body.addEventListener('resize',function(){link_0.style.left = bodywidth()/2 + link_0.style.width + 'px';})
