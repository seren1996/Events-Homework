function ShowLowerDiv(liText){
    var x = document.getElementById('lower-div');
  if (x.style.display == 'none') {
    x.style.display = 'block';
    x.innerHTML=liText;
  } else if (x.innerHTML!=liText){
    x.innerHTML=liText;
  }
  else {
    x.style.display = 'none';
  }
}