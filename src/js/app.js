import Field from './field';

const container = document.querySelector('.field-container');
const field = new Field(container);
field.drawField();
field.moveGoblin();
