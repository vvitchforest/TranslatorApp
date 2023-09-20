const form = document.querySelector('form')

const postData = async (userInput) => {
  try {
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })

    if (response.ok) {
      const result = await response.json()
      return result
    } else {
      console.error('Form submission failed')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const inputValue = document.getElementById('input_text').value
  const translation = await postData(inputValue)

  const alert = document.createElement('div')
  alert.innerHTML = translation
  document.getElementById('translation').appendChild(alert)
})
