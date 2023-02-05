const contextMenu = document.querySelector(".wrapper");
let shareMenu = contextMenu.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); //brauzerning chiqaradigan menusini bloklash
  let x = e.offsetX,
    y = e.offsetY;
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  cmWidht = contextMenu.offsetWidth;
  cmHeight = contextMenu.offsetHeight;
  /* x,y */
  x = x > winWidth - cmWidht ? winWidth - cmWidht : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;
  //if else
  if (x > winWidth - cmWidht - shareMenu.offsetWidth) {
    shareMenu.style.left = "-200px";
  } else {
    shareMenu.style.left = "";
    shareMenu.style.right = "-200px";
  }
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});
document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});
