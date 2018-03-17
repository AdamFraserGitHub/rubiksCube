var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var scrWidth = window.innerWidth;
var scrHeight = window.innerHeight;

var faceWidth = scrWidth / 7.5;
var cubieWidth = faceWidth / 3;

canvas.width = scrWidth;
canvas.height = scrHeight;

var colors = {
  O : 'rgb(255,100,0)',
  G : 'rgb(0,255,0)',
  W : 'rgb(255,255,255)',
  B : 'rgb(0,0,255)',
  Y : 'rgb(255,255,0)',
  R : 'rgb(255,0,0)'
}

var cube = ['O','O','O','O','O','O','O','O','O',
            'G','G','G','G','G','G','G','G','G',
            'W','W','W','W','W','W','W','W','W',
            'B','B','B','B','B','B','B','B','B',
            'Y','Y','Y','Y','Y','Y','Y','Y','Y',
            'R','R','R','R','R','R','R','R','R'];
//each layer in the cube structure represents a layer of an unwraped cube
//where orange is at the top Green, White, Blue and Yellow are in the next row
//and red is on it's own 2 down from orange
ctx.fillRect(0,0,100,100);
function drawCube(cube) {
  //first face
  var startX = Math.floor(scrWidth / 2 - faceWidth / 2);
  var startY = Math.floor(scrHeight / 2 - 1.5 * faceWidth);
  var x,y;
  for(var row = 0; row < 3; row++){
    for(var collum = 0; collum < 3; collum++) {
      ctx.fillStyle = colors[cube[row * 3 + collum]];
      x = startX + collum * cubieWidth;
      y = startY + row * cubieWidth;
      ctx.fillRect(x,y,Math.ceil(cubieWidth),Math.ceil(cubieWidth));
    }
  }

  startX -= faceWidth;
  startY += faceWidth;
  var x,y;
  for(var row = 0; row < 3; row++){
    for(var collum = 0; collum < 3; collum++) {
      ctx.fillStyle = colors[cube[row * 3 + collum + 9]];
      x = startX + collum * cubieWidth;
      y = startY + row * cubieWidth;
      ctx.fillRect(x,y,Math.ceil(cubieWidth),Math.ceil(cubieWidth));
    }
  }

  startX += faceWidth;
  var x,y;
  for(var row = 0; row < 3; row++){
    for(var collum = 0; collum < 3; collum++) {
      ctx.fillStyle = colors[cube[row * 3 + collum + 18]];
      x = startX + collum * cubieWidth;
      y = startY + row * cubieWidth;
      ctx.fillRect(x,y,Math.ceil(cubieWidth),Math.ceil(cubieWidth));
    }
  }

  startX += faceWidth;
  var x,y;
  for(var row = 0; row < 3; row++){
    for(var collum = 0; collum < 3; collum++) {
      ctx.fillStyle = colors[cube[row * 3 + collum + 27]];
      x = startX + collum * cubieWidth;
      y = startY + row * cubieWidth;
      ctx.fillRect(x,y,Math.ceil(cubieWidth),Math.ceil(cubieWidth));
    }
  }

  startX += faceWidth;
  var x,y;
  for(var row = 0; row < 3; row++){
    for(var collum = 0; collum < 3; collum++) {
      ctx.fillStyle = colors[cube[row * 3 + collum + 36]];
      x = startX + collum * cubieWidth;
      y = startY + row * cubieWidth;
      ctx.fillRect(x,y,Math.ceil(cubieWidth),Math.ceil(cubieWidth));
    }
  }

  startX -= 2*faceWidth;
  startY += faceWidth;
  var x,y;
  for(var row = 0; row < 3; row++){
    for(var collum = 0; collum < 3; collum++) {
      ctx.fillStyle = colors[cube[row * 3 + collum + 45]];
      x = startX + collum * cubieWidth;
      y = startY + row * cubieWidth;
      ctx.fillRect(x,y,Math.ceil(cubieWidth),Math.ceil(cubieWidth));
    }
  }
  drawBoundsOfFace(startX, startY);
}

function drawBoundsOfFace(x,y) {
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'rgb(0,0,0)';


  for(var i = 0; i < 4; i++) {
    ctx.beginPath();
      ctx.moveTo(x + i * cubieWidth, y);
      ctx.lineTo(x + i * cubieWidth, y + faceWidth);
    ctx.closePath();
  }

  for(var i = 0; i < 4; i++) {
    ctx.beginPath();
      ctx.moveTo(0, y + cubieWidth * i);
      ctx.lineTo(faceWidth, y + cubieWidth * i);
    ctx.closePath();
  }
}
