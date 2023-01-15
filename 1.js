// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

const parser = new DOMParser();
const xmlObj = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`

const xmlDOM = parser.parseFromString(xmlObj, "text/xml");
const studentsNode = xmlDOM.querySelectorAll('student')

let result = {list:[]}

for (let i=0; i<2; i++){
    const currentNode = studentsNode[i]
    const nameNode = currentNode.querySelector('name')
    const firstName = nameNode.querySelector('first').textContent
    const secondName = nameNode.querySelector('second').textContent
    const age = currentNode.querySelector("age").textContent
    const prof = currentNode.querySelector('prof').textContent

    resultObject = {name: firstName+' '+secondName, age: age, prof: prof}
    result.list.push(resultObject)
}

console.log(result)