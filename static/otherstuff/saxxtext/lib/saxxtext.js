function setAnimationSaxx(elem,saxxAnimationName){
  function addAnimationSaxx(elem,saxxAnimationName) {
        var element=document.querySelectorAll(elem),i;
            for (i = 0; i < element.length; ++i) {
              element[i].setAttribute('class',saxxAnimationName);
            }
            }

function rmAnimationSaxx(elem,saxxAnimationName) {
     setTimeout(function(){
        var element=document.querySelectorAll(elem),i;
            for (i = 0; i < element.length; ++i) {
          element[i].removeAttribute('class',saxxAnimationName);
            }
            },900);
        }

  rmAnimationSaxx(elem,saxxAnimationName);
  addAnimationSaxx(elem,saxxAnimationName);
}

function setSaxxMouseEffect(elem,saxxAnimationName,textColorbefore,textColorAfter){

  var element=document.querySelectorAll(elem);
  for (i = 0; i < element.length; ++i) {
      element[i].addEventListener('mouseover',function(){
    this.style.color=textColorAfter;
    this.style.cursor='default';
    this.setAttribute('class',saxxAnimationName);
  });

  element[i].addEventListener('hover',function(){a
this.style.color=textColorAfter;
this.style.cursor='default';
this.setAttribute('class',saxxAnimationName);
});
    
         element[i].addEventListener('mouseout',function(){
    this.style.color=textColorbefore;
    this.style.cursor='default';
    this.removeAttribute('class',saxxAnimationName);
  });
  }
}
