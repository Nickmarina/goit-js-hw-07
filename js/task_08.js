// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число.Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let amount = 0;

renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputRef.value;
  console.log(amount);
  let arrOfBoxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${20 + 10 * i}px`;
    box.style.height = `${20 + 10 * i}px`;
    box.style.backgroundColor = randomColor();
    box.style.marginBottom = '5px';
    arrOfBoxes.push(box);
  }
  boxesRef.append(...arrOfBoxes);
}

function destroyBoxes() {
  inputRef.value = 0;
  renderBtnRef.removeEventListener('click', createBoxes);
  const boxForRemoveRef = document.querySelectorAll('.box');
  let arrForDeleting = [];
  arrForDeleting.push(...boxForRemoveRef);
  for (const element of arrForDeleting) {
    element.remove();
  }
  renderBtnRef.addEventListener('click', createBoxes);
}

function randomColor() {
  const red = Math.random() * (255 - 0) + 0;
  const green = Math.random() * (255 - 0) + 0;
  const blue = Math.random() * (255 - 0) + 0;
  return `rgb(${red}, ${green}, ${blue})`;
}
