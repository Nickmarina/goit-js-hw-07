// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const validatorRef = document.querySelector('#validation-input');

validatorRef.classList.add('input');
validatorRef.addEventListener('blur', verificationFn);

function verificationFn(event) {
  if (event.target.value.length === 0) {
    blankInput();
  } else if (
    event.target.value.length === Number(event.target.dataset.length)
  ) {
    validInput();
  } else {
    invalidInput();
  }
}

function blankInput() {
  validatorRef.classList.remove('valid');
  validatorRef.classList.remove('invalid');
}

function validInput() {
  validatorRef.classList.remove('invalid');
  validatorRef.classList.add('valid');
}

function invalidInput() {
  validatorRef.classList.remove('valid');
  validatorRef.classList.add('invalid');
}
