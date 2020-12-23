// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

/* <div id="counter">
    <button type="button" data-action="decrement">-1</button>
    <span id="value">0</span>
    <button type="button" data-action="increment">+1</button>
</div> */

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  return (spanRef.textContent = counterValue);
}

function increment() {
  counterValue += 1;
  return (spanRef.textContent = counterValue);
}
