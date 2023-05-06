let user  = document.getElementById("user");
let button = document.getElementById("button");
// let response = document.getElementById("response");

// button.addEventListener("click" , ()=>
// {
// console.log(response.innerText  = user.value) ;
// })

let added = document.getElementById("food");

button.addEventListener("click" , ()=>
{
    added.innerHTML += `<li class="food-item">${user.value.toUpperCase()}</li>`;
})

let getting = document.getElementsByClassName("food-item veg");

console.log(getting[0].innerHTML = "sadni");