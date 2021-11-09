function response() {
  console.log('clicked')
}

const $buttons = document.querySelectorAll('button')

for (const element of $buttons) {
  element.addEventListener('click', response)
}