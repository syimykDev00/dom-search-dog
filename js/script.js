let row = document.querySelector(".row")
let btn = document.querySelector(".search-btn")
let input = document.querySelector(".input")
let error = document.querySelector(".error")

btn.addEventListener("click", () => {
    fetch(`https://dog.ceo/api/breed/${input.value.toLowerCase()}/images`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            row.innerHTML = ''
           data.message.length ? data.message.map(el => {
                row.innerHTML += `
                <div class="d-flex col-4 my-5">
                <img src="${el}" alt="image" class="img">
                </div>
                `
            }) : error.innerHTML += 'error'
        })
})