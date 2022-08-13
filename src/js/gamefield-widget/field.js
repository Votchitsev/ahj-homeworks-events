import Counter from '../counter';
import gameOverScreenListener from './gameOverScreenListener';

export default class Field {
  constructor(container) {
    this.container = container;
    this.hit = false;
  }

  drawField() {
    for (let i = 0; i < 16; i += 1) {
      const cell = '<div class="cell"></div>';
      this.container.innerHTML += cell;
    }
  }

  moveGoblin() {
    let index = 0;
    let intervalCounter = 0;

    const interval = setInterval(() => {
      const activeCell = this.container.querySelector('.active');

      if (activeCell) {
        activeCell.classList.remove('active');
      }
      index = this.getRandomCell(index);
      const cell = this.container.childNodes[index];
      cell.classList.add('active');

      if (!this.hit && intervalCounter > 0) {
        Counter.goblinAppear();
      }

      Counter.redraw();

      if (Counter.goblinAppearCount === 5) {
        clearInterval(interval);
        document.querySelector('.gameOverScreen').classList.remove('hide');
        gameOverScreenListener();
      }

      this.hit = false;
      intervalCounter += 1;
    }, 1000);
  }

  getRandomCell(index) {
    const result = Math.floor(Math.random() * (this.container.childNodes.length - 1));

    if (result === index) {
      return this.getRandomCell(index);
    }

    return result;
  }
}
