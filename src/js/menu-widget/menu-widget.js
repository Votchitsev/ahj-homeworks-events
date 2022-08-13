export default class Menu {
  constructor(gameField) {
    this.element = document.querySelector('#menu-button');
    this.gameField = gameField;
    this.score = 0;
  }

  addListeners() {
    const startButton = document.querySelector('#menu-button');
    const cells = document.querySelectorAll('.cell');

    startButton.addEventListener('click', () => {
      this.gameField.moveGoblin();
    });

    for (let i = 0; i < cells.length; i += 1) {
      cells.item(i).addEventListener('click', (event) => {
        if (event.target.classList.contains('active')) {
          this.score += 1;
          this.drawScore();
        }
      });
    }
  }

  drawScore() {
    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = this.score;
  }
}
