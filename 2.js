// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

const JSONstring = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`
const result = JSON.parse(JSONstring);
console.log(result);

// const data = JSON.parse(JSONstring)
// const objectsList = data.list 

// let result = {list:[]}

// for (let i=0; i<2; i++){
//     let studentName = objectsList[i].name
//     let age = objectsList[i].age
//     let prof = objectsList[i].prof
//     let resultObject = {name: studentName, age: age, prof: prof}
//     result.list.push(resultObject)
// }

// console.log(result)