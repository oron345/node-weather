

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const m_1 = document.querySelector('#m-1')
const m_2 = document.querySelector('#m-2')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                
                m_1.textContent = data.error
            } else {
                
                m_1.textContent= data.location
                m_2.textContent=data.forecast
            }
        })
    })
})