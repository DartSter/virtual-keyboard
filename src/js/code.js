// keybord.classList.add('keyboard');
// const key = document.createElement('div');
// const del = document.createElement('div');
// const arrow = document.createElement('div');
// del.innerHTML = 'del';
// arrow.classList.add('key');
// arrow.innerHTML = 'leftarrow';
// del.classList.add('key');
// key.innerHTML = 'Q';
// key.classList.add('key');
// key.dataset.keyCode = 'KeyQ';
// key.addEventListener('mousedown', () => {
//   const input = document.querySelector('.textarea');
//   const position = input.selectionStart;
//   if (input.value.length === position) {
//     input.value += `${key.innerHTML}`;
//   } else {
//     input.value = input.value.slice(0, position)
//       + key.innerHTML
//       + input.value.slice(position);
//   }
//   input.selectionStart = position + 1;
//   input.selectionEnd = position + 1;
// });
// del.addEventListener('mousedown', () => {
//   const input = document.querySelector('.textarea');
//   const position = input.selectionStart;
//   let newString = '';

//   if (position === 0) {
//     return;
//   }
//   if (input.value.length === position) {
//     newString = input.value.slice(0, input.value.length - 1);
//   } else {
//     newString = input.value.slice(0, position) + input.value.slice(position + 1);
//   }
//   input.value = newString;
//   input.focus();
//   input.selectionStart = position - 1;
//   input.selectionEnd = position - 1;
// });

// arrow.addEventListener('mousedown', () => {
//   const input = document.querySelector('.textarea');
//   const position = input.selectionStart;
//   if (position === 0) {
//     return;
//   }
//   input.selectionStart = position - 1;
//   input.selectionEnd = position - 1;
// });
// keybord.append(key);
// keybord.append(del);
// keybord.append(arrow);
