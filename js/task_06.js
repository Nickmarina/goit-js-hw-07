// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }

{
  /* <input
    type="text"
    id="validation-input"
    data-length="6"
    placeholder="Введи 6 символов"
/>
    <br /> */
}

const validatorRef = document.querySelector('#validation-input');
validatorRef.classList.add('input');

validatorRef.addEventListener('blur', verification);

function verification(event) {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    validatorRef.classList.remove('invalid');
    validatorRef.classList.add('valid');
  } else {
    validatorRef.classList.remove('valid');
    validatorRef.classList.add('invalid');
  }
}
