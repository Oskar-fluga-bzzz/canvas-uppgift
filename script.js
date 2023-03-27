// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
c.fillStyle = "#FF0000";
const midX = canvas.width / 2;
const midY = canvas.height / 2;
// Create gradient
var grd = c.createLinearGradient(0, 0, 800, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

// Fill with gradient
c.fillStyle = grd;
c.fillRect(500, 250, 400, 300);

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
  c.beginPath();
c.moveTo(500, 250);
c.lineTo(650, 100);
c.lineTo(900, 250);
c.stroke();
}
drawPicture();
