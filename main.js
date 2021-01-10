document.addEventListener('DOMContentLoaded', function() {
  // do stuff here

document.getElementById("language").onchange = function(){
        alert("You selected: "+this.value)
    }

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});
}, false);

