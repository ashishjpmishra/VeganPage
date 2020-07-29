var sideBar = document.getElementById("menu-toggle-icon");
var hiddenMenu = document.getElementById("sidebar-wrapper");
var overlay = document.getElementById("overlay");
sideBar.onclick = function(){
  hiddenMenu.style.display = "block";
}
overlay.onclick = function(){
  hiddenMenu.style.display = "none";
}