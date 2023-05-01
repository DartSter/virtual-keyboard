import keyboardKeys from '../data/keyboardKeys';

const keyboardKeysArray = Object.entries(keyboardKeys);

export default function updateKeyboard(upperCase, language) {
  const keysArray = document.querySelectorAll('.key');
  const langNumber = language === 'ru' ? 2 : 0;
  const numberOfRenderingChar = +upperCase + langNumber;
  keyboardKeysArray.forEach((item, i) => {
    keysArray[i].innerHTML = item[1][numberOfRenderingChar];
  });
}
