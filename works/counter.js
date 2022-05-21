let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: ' + count
}

const reset_count = () => {
    count = 0
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' +  count
}

const countUp2 = () => {
  count = count*2
  const countElement = document.querySelector("#count")
  countElement.innerText = '回数: ' + count
}