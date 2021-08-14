

document.getElementById('generate').addEventListener('click', event => {
  event.preventDefault()

  let length = prompt('Please choose a password that is at least 8 characters long, but no more than 128.')

  while (length < 8 || > 128) {
    alert('Please enter the correct amount of characters.')
    length = prompt('Please choose a password that is at least 8 characters long, but no more than 128.')
  }

  let lowercaseRes = comfirm('lowercase?')
  let uppercaseRes = comfirm('uppercase?')
  let numericRes = comfirm('numeric?')
  let specialRes = comfirm('special character?')

  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLOMNPQRSTUVWXYZ'
  const numeric = '1234567890'
  const special = '!@#$%^&*'

  let tempPass = ''
  let randomPass = ''

  if (lowercaseRes) {
    tempPass += lowercase
  }
  if (uppercaseRes) {
    tempPass += uppercase
  }
  if (numericRes) {
    tempPass += numeric
  }
  if (specialRes) {
    tempPass += special
  }

  length = 8
  for (let i = 0; i < length; i++) {
    randomPass += temPass[Math.floor(Math.random() * tempPass.length)]
  }

  document.getElementById('password').textContent = randomPass
})


