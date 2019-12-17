document.getElementById("spinthewheel").onclick = function() {fucku()};

function fucku(){
  var ar=Math.floor((Math.random()*6)+1);
  var random1="images/dice"+ar+".png";
  document.querySelectorAll('img')[0].setAttribute('src',random1);
  var oi=Math.floor((Math.random()*6)+1);
  var random2='images/dice'+oi+'.png';
  document.querySelectorAll('img')[1].setAttribute('src',random2);
  if (ar>oi) {
  document.querySelector("h1").innerHTML="Player 1 Wins";
  }
  else if(ar==oi){
  document.querySelector("h1").innerHTML="Draw";
  }
  else {
    document.querySelector("h1").innerHTML="Player 2 Wins";
  }

}
