function iconHover(id, element) {
    const select = document.getElementById(id).getElementsByClassName(element)
    select.style.background="white";
    select.style.color="blue"
    document.getElementById
}


function iconLeave(id, element) {
    const select = document.getElementById(id).querySelector(element)
    select.style.background="transparent";
    select.style.color="white";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function nav() {
  var x = document.getElementById("nav-dropdown");
  if (x.className === "hidden") {
    x.className = "";
  } else {
    x.className = "hidden";
  }
} 