import Counter from '../counter';

export default class Menu {
  constructor(gameField) {
    this.element = document.querySelector('#menu-button');
    this.gameField = gameField;
  }

  addListeners() {
    const startButton = document.querySelector('#menu-button');
    const cells = document.querySelectorAll('.cell');

    startButton.addEventListener('click', () => {
      this.gameField.moveGoblin();
      this.goblinAppearCount = 0;
    });

    for (let i = 0; i < cells.length; i += 1) {
      cells.item(i).addEventListener('click', (event) => {
        if (event.target.classList.contains('active')) {
          Counter.addScore();
          this.gameField.hit = true;
        }
      });
    }
  }
}
