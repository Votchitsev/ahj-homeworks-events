import Field from './field';
import Menu from './menu-widget/menu-widget';

const container = document.querySelector('.field-container');

const field = new Field(container);
field.drawField();

const menu = new Menu(field);
menu.addListeners();
menu.drawScore();
