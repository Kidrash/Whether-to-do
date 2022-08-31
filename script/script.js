// fetch('api.openweathermap.org/data/2.5/forecast?q='+clientCity.value+'&days=5&units=metric&appid=123ac1176c339e22e6b46ccd6bd0a898')
// .then(function(resp){
//     return resp.json()
// })
// .then(function(data){
//     console.log(data)
// })
document.addEventListener("DOMContentLoaded", ()=> {
    let submitCity = document.querySelector('submit')
    submitCity.addEventListener('submit', (e)=> {
        e.preventDefault()
        handleTask(e.target.client_city.value)
    })
})
