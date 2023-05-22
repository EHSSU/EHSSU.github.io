/* Toggle between adding and removing the "hidden" class to topnav when the user clicks on the icon */
function nav() {
  var x = document.getElementById("nav-dropdown");
  if (x.className === "hidden") {
    x.className = "";
  } else {
    x.className = "hidden";
  }
} 