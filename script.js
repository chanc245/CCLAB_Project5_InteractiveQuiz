var square = document.getElementById("square");

document.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  var y = event.clientY;
  square.style.left = x + "px";
  square.style.top = y + "px";
  square.textContent = "x: " + (x - 20) + ", y: " + (y - 20);
  //I dont know why 20 conpensation is nesscory, but haha it works :)
});