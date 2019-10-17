


$(function() {
    $('.lvl1').on("click", function() {
    $(this).find('>.lvl2').toggle();
  })

  $('.lvl2').on('click', function() {
    $(this).toggle();
  })
});




function rejoindre() {
  document.getElementById('join').onclick = function(){ 
      if (document.getElementById('join').checked){ 
          document.getElementById('postule').style.display = "block";
      }else{
          document.getElementById('postule').style.display = "none";
}
};
  document.getElementById('postule').style.display = "none";
};

function inscri() {
  document.getElementById('new').onclick = function(){ 
      if (document.getElementById('new').checked){ 
          document.getElementById('newlog').style.display = "block";
      }else{
          document.getElementById('newlog').style.display = "none";
}
};
  document.getElementById('newlog').style.display = "none";
};

function co() {
  document.getElementById('connection').onclick = function(){ 
      if (document.getElementById('connection').checked){ 
          document.getElementById('log').style.display = "block";
      }else{
          document.getElementById('log').style.display = "none";
}
};
  document.getElementById('log').style.display = "none";
};


window.onload = function(){
    co();
    rejoindre();
    inscri();
}

