// - Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let getEbyID = document.getElementById('content')
console.log(getEbyID.textContent);


// -- отримує текст з блоку з id "rules"

let getID = document.getElementById('rules')
console.log(getID.textContent);

//
// // -- замініть текст параграфа з id 'content' на будь-який інший
//
getEbyID.innerText = 'Массивы наследуют по умолчанию метод valueOf(), который возвращает сам объект, а не простое значение, поэтому при преобразовании массива в число интерпретатор опирается на метод toString(). Пустые массивы преобразуются в пустую строку.'
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
//
getID.innerText = 'Если выполняется сравнение объекта с простым значением, оператор выполнит преобразование объекта с использованием правил преобразования в простое значение.'
//
//
// // -- змініть кожному елементу колір фону на червоний
//
const getP = document.getElementsByClassName('content');
 getEbyID.style.backgroundColor = 'red';
 getID.style.backgroundColor = 'red';

const getclass = document.getElementsByClassName('fc_rules');
  for (let ulli of getclass) {
    ulli.style.backgroundColor = 'red';
 }

// // -- змініть кожному елементу колір тексту на синій
getEbyID.style.backgroundColor = 'blue';
 getID.style.backgroundColor = 'blue';
 for (let ulli of getclass) {
     ulli.style.backgroundColor = 'blue';
 }


// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
 console.log(getID.classList)


// // -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
// // одна вивдоить текст елементу, інша довільний текст

const getfcrules = document.getElementsByClassName('fc_rules')
 for (let getfcrul of getfcrules) {
     getfcrul.onclick = function () {
         console.log(getfcrul)
         console.log('Правила бойцовского клуба')
    }
 }



// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (let ulli of getclass) {
    ulli.style.backgroundColor = 'red';
 }