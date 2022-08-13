import gameOverScreenListener from './gameOverScreenListener';

export default class Field {
  constructor(container) {
    this.container = container;
    this.run = true;
  }

  drawField() {
    for (let i = 0; i < 16; i += 1) {
      const cell = '<div class="cell"></div>';
      this.container.innerHTML += cell;
    }
  }

  moveGoblin() {
    let index = 0;

    const interval = setInterval(() => {
      if (this.run) {
        const activeCell = this.container.querySelector('.active');

        if (activeCell) {
          activeCell.classList.remove('active');
        }
        index = this.getRandomCell(index);
        const cell = this.container.childNodes[index];
        cell.classList.add('active');
      } else {
        clearInterval(interval);
        document.querySelector('.gameOverScreen').classList.remove('hide');
        gameOverScreenListener();
      }
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
