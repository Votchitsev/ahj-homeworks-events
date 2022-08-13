export default class Menu {
  constructor(gameField) {
    this.element = document.querySelector('#menu-button');
    this.gameField = gameField;
    this.score = 0;
    this.mishitCount = 0;
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
        } else {
          this.mishitCount += 1;
          this.drawMishitCount();
        }
      });
    }
  }

  drawScore() {
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = this.score;
  }

  drawMishitCount() {
    const mishitElement = document.querySelector('.mishit');
    mishitElement.textContent = this.mishitCount;
  }
}
