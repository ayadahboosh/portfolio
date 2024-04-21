function myFunction() {
    var x = document.getElementById("all-nav");
    console.log(x);
    if (x.className == "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }