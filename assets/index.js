var diffEls = document.querySelectorAll(".diff__btn");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = diffEl;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var colors = [];
createBlocks(n);
resetGame();



function resetGame() {
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
}


function setEqual(j) {
	for (let i = 0; i < colorsBlocks.length; i++) {
		colorsBlocks[i].style.backgroundColor = j;
	}
}
for (let i = 0; i < diffEls.length; i++) {
  diffEls[i].addEventListener("click", setNumberOfTiles);
}


function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}
function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function setNumberOfTiles(e) {
  for (let i = 0; i < diffEls.length; i++) {
		diffEls[i].classList.remove("active");
	}
	e.target.classList.add("active");
  n = document.querySelector(".diff__btn.active").textContent;
	resetGame();
}
let text = document.querySelector(".status");
let rgb = document.querySelector(".rgb");

function createBlocks(num) {
  colorsEl.innerHTML = "";

  
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (let i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", () => {
      if ((colorsBlocks[i].style.backgroundColor) === rgb.textContent) {
        setEqual(rgb.textContent);
        text.textContent = "Congrats!!! Correct Color";
        setTimeout(() => {
          location.reload()
        }
            ,2000
          ) 
      }
      else {
        colorsBlocks[i].style.backgroundColor = '#fff'
        text.textContent='Wrong Color,Try again'
      }
      
    });

	}
}
