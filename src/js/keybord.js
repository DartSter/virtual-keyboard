import keyboardKeys from '../data/keyboardKeys';
import updateKeyboard from './upadateKeyboard';

const keybord = document.createElement('div');
const keyboardKeysArray = Object.entries(keyboardKeys);
let language = localStorage.getItem('leng') ? localStorage.getItem('leng') : 'en';
localStorage.setItem('leng', language);
let upperCase = false;
let shiftOn = false;
let capsOn = false;
let ctrlOn = false;
let altOn = false;
keybord.classList.add('keybord');
keyboardKeysArray.forEach((item) => {
  const key = item[0];
  const value = item[1][0];
  const btn = document.createElement('div');
  btn.classList.add('key');
  btn.dataset.key = key;
  btn.innerText = value;
  keybord.append(btn);
});

document.addEventListener('DOMContentLoaded', () => {
  language = localStorage.getItem('leng') ? localStorage.getItem('leng') : 'en';
  updateKeyboard(upperCase, language);
});

document.addEventListener('beforeunload', () => {
  localStorage.setItem('leng', language);
});

document.addEventListener('mousedown', (e) => {
  const key = e.target;
  const input = document.querySelector('.textarea');
  const position = input.selectionStart;
  if (!e.target.classList.contains('key')) {
    return;
  }

  if (key.dataset.key === 'CapsLock' && capsOn) {
    upperCase = !upperCase;
    capsOn = false;
    updateKeyboard(upperCase, language);
    setTimeout(() => {
      key.classList.remove('active');
    }, 100);
    return;
  }

  if (key.classList.contains('active')) {
    return;
  }

  if (
    (key.dataset.key === 'ShiftLeft' || key.dataset.key === 'ShiftRight')
    && shiftOn
  ) {
    const list = document.querySelectorAll('.key');
    list.forEach((item) => {
      if (item.dataset.key !== 'CapsLock') {
        item.classList.remove('active');
      }
    });
    shiftOn = false;
    upperCase = !upperCase;
    updateKeyboard(upperCase, language);
    return;
  }
  if ((altOn && (key.dataset.key !== 'ControlLeft' && key.dataset.key !== 'ControlRight')) || (ctrlOn && (key.dataset.key !== 'AltRight' || key.dataset.key !== 'AltLeft'))) {
    altOn = false;
    ctrlOn = false;
    const list = document.querySelectorAll('.key');
    list.forEach((item) => {
      if (item.dataset.key === 'CapsLock' || item.dataset.key === 'ShiftLeft' || key.dataset.key === 'ShiftRight') {
        return;
      }
      item.classList.remove('active');
    });
  }
  e.target.classList.add('active');

  if (key.dataset.key === 'ShiftLeft' || key.dataset.key === 'ShiftRight') {
    shiftOn = true;
    upperCase = !upperCase;
    updateKeyboard(upperCase, language);
    return;
  }

  if (key.dataset.key === 'CapsLock') {
    capsOn = true;
    upperCase = !upperCase;
    updateKeyboard(upperCase, language);
    return;
  }

  if (key.dataset.key === 'Backspace') {
    let newString = '';
    const selectEnd = input.selectionEnd;
    if (position === 0 && selectEnd === input.value.length) {
      input.value = newString;
      return;
    }
    if (position === 0) {
      return;
    }
    if (input.value.length === position) {
      newString = input.value.slice(0, input.value.length - 1);
    } else if (selectEnd !== position) {
      newString = input.value.slice(0, position) + input.value.slice(selectEnd);
      input.value = newString;
      input.focus();
      input.selectionStart = position;
      input.selectionEnd = position;
      return;
    }
    newString = input.value.slice(0, position - 1) + input.value.slice(position);
    input.value = newString;
    input.focus();
    input.selectionStart = position - 1;
    input.selectionEnd = position - 1;
    return;
  }

  if (key.dataset.key === 'Delete') {
    let newString = '';
    const selectEnd = input.selectionEnd;
    if (position === 0 && selectEnd === input.value.length) {
      input.value = newString;
      return;
    }
    if (input.value.length === position) {
      return;
    }
    if (position === 0) {
      newString = input.value.slice(1, input.value.length);
    } else if (selectEnd !== position) {
      newString = input.value.slice(0, position) + input.value.slice(selectEnd);
      input.value = newString;
      input.focus();
      input.selectionStart = position;
      input.selectionEnd = position;
      return;
    } else {
      newString = input.value.slice(0, position) + input.value.slice(position + 1);
    }
    input.value = newString;
    input.focus();
    input.selectionStart = position;
    input.selectionEnd = position;
    return;
  }

  if (key.dataset.key === 'Enter') {
    if (input.value.length === position) {
      input.value += '\n';
    } else {
      input.value = `${input.value.slice(0, position)}\n${input.value.slice(
        position,
      )}`;
    }
    input.selectionStart = position + 1;
    input.selectionEnd = position + 1;
    return;
  }

  if (key.dataset.key === 'Tab') {
    if (input.value.length === position) {
      input.value += '\t';
    } else {
      input.value = `${input.value.slice(0, position)}\t${input.value.slice(
        position,
      )}`;
    }
    input.selectionStart = position + 1;
    input.selectionEnd = position + 1;
    return;
  }

  if (key.dataset.key === 'Space') {
    if (input.value.length === position) {
      input.value += ' ';
    } else {
      input.value = `${input.value.slice(0, position)} ${input.value.slice(
        position,
      )}`;
    }
    input.selectionStart = position + 1;
    input.selectionEnd = position + 1;
    return;
  }

  if (key.dataset.key === 'MetaLeft') {
    return;
  }

  if (key.dataset.key === 'AltRight' || key.dataset.key === 'AltLeft') {
    altOn = true;
    if (ctrlOn) {
      language = language === 'en' ? 'ru' : 'en';
      localStorage.setItem('leng', language);
      updateKeyboard(upperCase, language);
      const list = document.querySelectorAll('.key');
      list.forEach((item) => {
        if (item.dataset.key === 'CapsLock' || item.dataset.key === 'ShiftLeft' || key.dataset.key === 'ShiftRight') {
          return;
        }
        item.classList.remove('active');
      });
    }
    return;
  }
  if (key.dataset.key === 'ControlLeft' || key.dataset.key === 'ControlRight') {
    ctrlOn = true;
    if (altOn) {
      language = language === 'en' ? 'ru' : 'en';
      localStorage.setItem('leng', language);
      updateKeyboard(upperCase, language);
      const list = document.querySelectorAll('.key');
      list.forEach((item) => {
        if (item.dataset.key === 'CapsLock' || item.dataset.key === 'ShiftLeft' || key.dataset.key === 'ShiftRight') {
          return;
        }
        item.classList.remove('active');
      });
    }
    return;
  }

  if (input.value.length === position) {
    input.value += `${key.innerText}`;
  } else {
    input.value = input.value.slice(0, position)
      + key.innerText
      + input.value.slice(position);
  }
  input.selectionStart = position + 1;
  input.selectionEnd = position + 1;
});

document.addEventListener('mouseup', (e) => {
  if (!e.target.classList.contains('key')) {
    return;
  }

  if (e.target.dataset.key === 'CapsLock') {
    return;
  }

  if (
    e.target.dataset.key === 'ShiftLeft'
    || e.target.dataset.key === 'ShiftRight'
  ) {
    if (shiftOn) {
      shiftOn = false;
      upperCase = !upperCase;
      updateKeyboard(upperCase, language);
    }
  }
  altOn = false;
  ctrlOn = false;
  setTimeout(() => {
    e.target.classList.remove('active');
  }, 100);
});

document.addEventListener('mouseout', (e) => {
  if (
    !e.target.classList.contains('key')
    || e.target.dataset.key === 'ShiftLeft'
    || e.target.dataset.key === 'ShiftRight'
    || e.target.dataset.key === 'CapsLock'
    || e.target.dataset.key === 'AltRight'
    || e.target.dataset.key === 'AltLeft'
    || e.target.dataset.key === 'ControlLeft'
    || e.target.dataset.key === 'ControlRight'
  ) {
    return;
  }

  const key = e.target;
  key.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const { code } = e;
  const list = document.querySelectorAll('.key');
  const input = document.querySelector('.textarea');
  const position = input.selectionStart;
  const element = [...list].filter((i) => i.dataset.key === code);
  const key = element[0];
  if (!element.length) {
    return;
  }

  if (key.dataset.key === 'CapsLock' && capsOn) {
    upperCase = !upperCase;
    capsOn = false;
    updateKeyboard(upperCase, language);
    setTimeout(() => {
      key.classList.remove('active');
    }, 100);
    return;
  }

  if (key.classList.contains('active')) {
    return;
  }

  if (
    (key.dataset.key === 'ShiftLeft' || key.dataset.key === 'ShiftRight')
    && shiftOn
  ) {
    list.forEach((item) => {
      if (item.dataset.key !== 'CapsLock') {
        item.classList.remove('active');
      }
    });
    shiftOn = false;
    upperCase = !upperCase;
    updateKeyboard(upperCase, language);
    return;
  }
  key.classList.add('active');

  if (key.dataset.key === 'ShiftLeft' || key.dataset.key === 'ShiftRight') {
    shiftOn = true;
    upperCase = !upperCase;
    updateKeyboard(upperCase, language);
    return;
  }

  if (key.dataset.key === 'CapsLock') {
    capsOn = true;
    upperCase = !upperCase;
    updateKeyboard(upperCase, language);
    return;
  }

  if (key.dataset.key === 'Backspace') {
    let newString = '';
    const selectEnd = input.selectionEnd;
    if (position === 0 && selectEnd === input.value.length) {
      input.value = newString;
      return;
    }
    if (position === 0) {
      return;
    }
    if (input.value.length === position) {
      newString = input.value.slice(0, input.value.length - 1);
    } else if (selectEnd !== position) {
      newString = input.value.slice(0, position) + input.value.slice(selectEnd);
      input.value = newString;
      input.focus();
      input.selectionStart = position;
      input.selectionEnd = position;
      return;
    }
    newString = input.value.slice(0, position - 1) + input.value.slice(position);
    input.value = newString;
    input.focus();
    input.selectionStart = position - 1;
    input.selectionEnd = position - 1;
    return;
  }

  if (key.dataset.key === 'Delete') {
    let newString = '';
    const selectEnd = input.selectionEnd;
    if (position === 0 && selectEnd === input.value.length) {
      input.value = newString;
      return;
    }
    if (input.value.length === position) {
      return;
    }
    if (position === 0) {
      newString = input.value.slice(1, input.value.length);
    } else if (selectEnd !== position) {
      newString = input.value.slice(0, position) + input.value.slice(selectEnd);
      input.value = newString;
      input.focus();
      input.selectionStart = position;
      input.selectionEnd = position;
      return;
    } else {
      newString = input.value.slice(0, position) + input.value.slice(position + 1);
    }
    input.value = newString;
    input.focus();
    input.selectionStart = position;
    input.selectionEnd = position;
    return;
  }

  if (key.dataset.key === 'Enter') {
    if (input.value.length === position) {
      input.value += '\n';
    } else {
      input.value = `${input.value.slice(0, position)}\n${input.value.slice(
        position,
      )}`;
    }
    input.selectionStart = position + 1;
    input.selectionEnd = position + 1;
    return;
  }

  if (key.dataset.key === 'Tab') {
    if (input.value.length === position) {
      input.value += '\t';
    } else {
      input.value = `${input.value.slice(0, position)}\t${input.value.slice(
        position,
      )}`;
    }
    input.selectionStart = position + 1;
    input.selectionEnd = position + 1;
    return;
  }

  if (key.dataset.key === 'Space') {
    if (input.value.length === position) {
      input.value += ' ';
    } else {
      input.value = `${input.value.slice(0, position)} ${input.value.slice(
        position,
      )}`;
    }
    input.selectionStart = position + 1;
    input.selectionEnd = position + 1;
    return;
  }

  if (key.dataset.key === 'MetaLeft') {
    return;
  }

  if (key.dataset.key === 'AltRight' || key.dataset.key === 'AltLeft') {
    altOn = true;
    if (ctrlOn) {
      language = language === 'en' ? 'ru' : 'en';
      updateKeyboard(upperCase, language);
      localStorage.setItem('leng', language);
    }
    return;
  }
  if (key.dataset.key === 'ControlLeft' || key.dataset.key === 'ControlRight') {
    ctrlOn = true;
    if (altOn) {
      language = language === 'en' ? 'ru' : 'en';
      localStorage.setItem('leng', language);
      updateKeyboard(upperCase, language);
    }
    return;
  }

  if (input.value.length === position) {
    input.value += `${key.innerText}`;
  } else {
    input.value = input.value.slice(0, position)
      + key.innerText
      + input.value.slice(position);
  }
  input.selectionStart = position + 1;
  input.selectionEnd = position + 1;
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  const { code } = e;
  const list = document.querySelectorAll('.key');
  const element = [...list].filter((i) => i.dataset.key === code);
  const key = element[0];
  if (!element.length) {
    return;
  }

  if (key.dataset.key === 'CapsLock') {
    return;
  }

  if (
    key.dataset.key === 'ShiftLeft'
    || key.dataset.key === 'ShiftRight'
  ) {
    if (shiftOn) {
      shiftOn = false;
      upperCase = !upperCase;
      updateKeyboard(upperCase, language);
    }
  }
  altOn = false;
  ctrlOn = false;
  setTimeout(() => {
    key.classList.remove('active');
  }, 100);
});

export default keybord;
