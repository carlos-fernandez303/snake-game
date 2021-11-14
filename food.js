import { onSnake, expandSnake } from "./snake.js";
import { getRandomGridPosition } from "./grid.js";
const scoreBoard = document.getElementById("score");
let score = 0;
const EXPANSION_RATE = 1;

let food = getRandomFoodPosition();

export function update() {
  if (onSnake(food)) {
    scoreBoard.innerText = `Score: ${++score}`;

    expandSnake(EXPANSION_RATE);

    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getRandomGridPosition();
  }
  return newFoodPosition;
}
