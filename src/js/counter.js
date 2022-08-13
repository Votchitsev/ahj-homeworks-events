export default class Counter {
  static goblinAppearCount = 0;

  static score = 0;

  static goblinAppear() {
    this.goblinAppearCount += 1;
  }

  static addScore() {
    this.score += 1;
  }

  static redraw() {
    const scoreEl = document.querySelector('.score');
    const goblinAppearCountEl = document.querySelector('.goblin-appear');
    scoreEl.textContent = this.score;
    goblinAppearCountEl.textContent = this.goblinAppearCount;
  }
}
