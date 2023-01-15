// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.



const btnNode = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result')

async function useRequest(url) {
  return await fetch(url)
      .then((response) => {
          console.log(response.url)
          return response.url;
      });
}

document.querySelector('.j-btn-request').addEventListener('click', async () => {
  const inputValueOne = parseInt(document.getElementById('searchTxt1').value)
  const inputValueTwo = parseInt(document.getElementById('searchTxt2').value)
  if ((inputValueOne < 100 || inputValueOne > 300 || isNaN(inputValueOne)) || (inputValueTwo < 100 || inputValueTwo > 300 || isNaN(inputValueTwo))) {
    resultNode.innerHTML = 'число вне диапазона от 100 до 300'
    document.querySelector('img').src = ''
  } else {
    document.querySelector('img').src = await useRequest(`https://picsum.photos/${inputValueOne}/${inputValueTwo}`)
    resultNode.innerHTML = ''
  }
})