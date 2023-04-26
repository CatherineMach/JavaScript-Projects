function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  $('.fadein img:gt(0)').hide();
  setInterval(function(){ },3000);
  $('.fadein :first-child').fadeOut()
  .next('img').fadeIn()
  .end().appendTo('.fadein')