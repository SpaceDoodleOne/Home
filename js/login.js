
// Get the modal
var modal0 = document.getElementById('id01');
var modal1 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal0) {
        modal0.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
$(document).ready(function(){

  $("#signin").click(function(){
    modal1.style.display = "none";
    modal0.style.display = "block";
  });
  $("#signup").click(function(){
    modal0.style.display = "none";
    modal1.style.display = "block";
  });

});
