// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories,+
// то есть элементов li.item.Получится 'В списке 3 категории.'.+
// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов в
// категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

const categoryRef = categoriesRef.forEach(elem => {
  const titleRef = elem.querySelector('h2');
  const itemsRef = elem.querySelectorAll('li');

  console.log(`Категория: ${titleRef.textContent}
 Количество элементов: ${itemsRef.length}`);
});
