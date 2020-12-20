// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM -
// узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newItemRef = ingredients.map(ingredient => {
  const titleRef = document.createElement('li');
  titleRef.textContent = ingredient;
  return titleRef;
});

const newUlRef = document.querySelector('#ingredients');
newUlRef.append(...newItemRef);
