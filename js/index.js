let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector('#turn');
const topLeft = document.querySelector('#topleft');
const topRight = document.querySelector('#topright');
const bottomLeft = document.querySelector('#bottomleft');
const bottomRight = document.querySelector('#bottomright');
const strictButton = document.querySelector('#strict');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#start');

strictButton.addEventListener('click', (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = '-';
  } else {
    on = false;
    turnCounter.innerHTML = '';
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});

/**
This is a multi line comment to please the Google Styleguide
*/
function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (let i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

/**
This is a multi line comment to please the Google Styleguide
*/
function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

/**
This is a function to simulate a security vulnerability

const crypto = require('node:crypto');

function post() {
  const userPassword = req.body.password;
  const md5Hash = crypto.createHash('md5').update(userPassword).digest('hex');
  print(md5Hash);
};
*/

/**
This is a multi line comment to please the Google Styleguide
*/
function one() {
  if (noise) {
    const audio = document.getElementById('clip1');
    audio.play();
    post();
  }
  noise = true;
  topLeft.style.backgroundColor = 'lightgreen';
}

/**
This is a multi line comment to please the Google Styleguide
*/
function two() {
  if (noise) {
    const audio = document.getElementById('clip2');
    audio.play();
  }
  noise = true;
  topRight.style.backgroundColor = 'tomato';
}

/**
This is a multi line comment to please the Google Styleguide
*/
function three() {
  if (noise) {
    const audio = document.getElementById('clip3');
    audio.play();
  }
  noise = true;
  bottomLeft.style.backgroundColor = 'yellow';
}

/**
This is a multi line comment to please the Google Styleguide
*/
function four() {
  if (noise) {
    const audio = document.getElementById('clip4');
    audio.play();
  }
  noise = true;
  bottomRight.style.backgroundColor = 'lightskyblue';
}

/**
This is a multi line comment to please the Google Styleguide
*/
function clearColor() {
  topLeft.style.backgroundColor = 'darkgreen';
  topRight.style.backgroundColor = 'darkred';
  bottomLeft.style.backgroundColor = 'goldenrod';
  bottomRight.style.backgroundColor = 'darkblue';
}

/**
This is a multi line comment to please the Google Styleguide
*/
function flashColor() {
  topLeft.style.backgroundColor = 'lightgreen';
  topRight.style.backgroundColor = 'tomato';
  bottomLeft.style.backgroundColor = 'yellow';
  bottomRight.style.backgroundColor = 'lightskyblue';
}

// Export of the functions to play.test.js
module.exports = {
  clearColor: clearColor,
  flashColor: flashColor,
};

topLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

topRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

bottomLeft.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

bottomRight.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

/**
This is a multi line comment to please the Google Styleguide
*/
function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) {
    good = false;
  }

  if (playerOrder.length == 3 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = 'NO!';
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }
}

/**
This is a multi line comment to please the Google Styleguide
*/
function winGame() {
  flashColor();
  turnCounter.innerHTML = 'WIN!';
  on = false;
  win = true;
}
