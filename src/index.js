import textarea from './js/textarea';
import keybord from './js/keybord';
import instruction from './js/Instruction';

document.body.innerHTML = '<div class=\'main-container\'></div>';
const mainContainer = document.querySelector('.main-container');

mainContainer.append(textarea);
mainContainer.append(keybord);
mainContainer.append(instruction);
