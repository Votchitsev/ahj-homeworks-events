export default class Menu {
  constructor(gameField) {
    this.element = document.querySelector('#menu-button');
    this.gameField = gameField;
  }

  addListeners() {
    const startButton = document.querySelector('#menu-button');

    startButton.addEventListener('click', () => {
      this.gameField.moveGoblin();
    });
  }
}
