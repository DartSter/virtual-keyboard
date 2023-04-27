import keyboardKeys from '../data/keyboardKeys';

const keybord = document.createElement('div');
keybord.classList.add('keybord');
const keyboardKeysArray = Object.entries(keyboardKeys);
keyboardKeysArray.forEach((item) => {
  const key = item[0];
  const value = item[1][0];
  const btn = document.createElement('div');
  btn.classList.add('key');
  btn.dataset.key = key;
  btn.dataset.keyCode = key;
  btn.innerHTML = value;
  keybord.append(btn);
});

export default keybord;
