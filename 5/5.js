// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.



const btnNode = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result')

function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
      
    resultNode.innerHTML = cards;
  }  

document.querySelector('.j-btn-request').addEventListener('click', async () => {
    const inputValueOne = parseInt(document.getElementById('searchTxt1').value)
    const inputValueTwo = parseInt(document.getElementById('searchTxt2').value)
    let firstFlag = (inputValueOne<1 || inputValueOne>10 || isNaN(inputValueOne))
    let secondFlag = (inputValueTwo<1 || inputValueTwo>10 || isNaN(inputValueTwo))
    if (firstFlag && secondFlag) {
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
    } else if (firstFlag && !secondFlag) {
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    } else if (!firstFlag && secondFlag) {
        resultNode.innerHTML = 'Номер лимитa вне диапазона от 1 до 10'
    } else {
        fetch(`https://picsum.photos/v2/list?page=${inputValueOne}&limit=${inputValueTwo}`)
        .then((response) => response.json())
        .then((json) => {
            localStorage.setItem('response', JSON.stringify(json));
            displayResult(json)
        })

    }
})

if (localStorage.getItem('response')){
    displayResult(JSON.parse(localStorage.getItem('response')))
  }
