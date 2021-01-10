document.addEventListener('DOMContentLoaded', function() {
  // do stuff here
  function toggleBurger() {
      var burger = $('.burger');
      var menu = $('.navbar-menu');
      burger.toggleClass('is-active');
      menu.toggleClass('is-active');
  }
document.getElementById("language").onchange = function(){
        alert("You selected: "+this.value)
    }

var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});
}, false);


