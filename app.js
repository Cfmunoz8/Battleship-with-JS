const gamesBoardContainer = document.querySelector("#gamesboard-container");
const options = document.querySelector(".options");
const flipButton = document.querySelector("#flip-button");

// Creating Boards
const width = 10;

function createBoard(color, user) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.classList.add("game-board");
  gameBoardContainer.style.backgroundColor = color;
  gameBoardContainer.id = user;

  for (let i = 0; i < width * width; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = i;
    gameBoardContainer.append(block);
  }

  gamesBoardContainer.append(gameBoardContainer);
}

createBoard("lightblue", "player");
createBoard("pink", "computer");

// Option choosing
let angle = 0;
function flip() {
  const optionBoats = Array.from(options.children);
  angle = angle === 0 ? 90 : 0;
  optionBoats.forEach(
    (optionBoat) => (optionBoat.style.transform = `rotate(${angle}deg)`)
  );
}

flipButton.addEventListener("click", flip);

//Creating Ships
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const destroyer = new Ship('destroyer', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]