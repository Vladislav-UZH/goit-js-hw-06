/**
 * Напиши скрипт создания и очистки коллекции элементов.
 *  Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
 *  При нажатии на кнопку Очистить, коллекция элементов очищается.
 * Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>,
 *  сколько указано в amount и добавляет их в div#boxes.
 
 * Размеры самого первого <div> - 30px на 30px.
 * Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
 * Все элементы должены иметь случайный цвет фона в формате HEX.
 * Используй готовую функцию getRandomHexColor для получения цвета.
 
 * Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
 */

const refs = {
  quantityOfBoxesInputEl: (document.querySelector('#controls')).firstElementChild,
  createDivBtn: document.querySelector('button[data-create]'),
  destroyDivBtn: document.querySelector('button[data-destroy]'),
  boxesContainerEl: document.querySelector('#boxes')
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getData = () => {
  
}


const createBoxes = amount => {
  let result = [];
  for (let i = 0; i < amount; i += 1){
    result.push(`<div style="background-color: ${getRandomHexColor()};" ">${i}</div>`)    
  }
  result = result.join('')
  console.log(result);
  refs.boxesContainerEl.innerHTML=result;
}

createBoxes(20);

const destroyBoxes = () => {
  refs.boxesContainerEl.innerHTML='';
}
// console.log(refs.quantityOfBoxesEl.value);
refs.quantityOfBoxesInputEl.addEventListener('blur', getData)
destroyBoxes()