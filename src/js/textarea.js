const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.autofocus = true;
textarea.rows = 12;
textarea.addEventListener('blur', () => {
  textarea.focus();
});
export default textarea;
