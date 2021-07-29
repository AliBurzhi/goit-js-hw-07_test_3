const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulListEl = document.querySelector('#ingredients');


const elements = ingredients.map(ingredient => {
  const liItemEl = document.createElement('li');
  liItemEl.textContent = ingredient;
  return liItemEl;
});

console.log(elements)

ulListEl.append(...elements);

