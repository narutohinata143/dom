// // let user  = document.getElementById("user");
// // let button = document.getElementById("button");
// // let response = document.getElementById("response");

// // button.addEventListener("click" , ()=>
// // {
// // console.log(response.innerText  = user.value) ;
// // })

// // let added = document.getElementById("food");

// // button.addEventListener("click" , ()=>
// // {
// //     added.innerHTML += `<li class="food-item">${user.value.toUpperCase()}</li>`;
// // })

// // let getting = document.getElementsByClassName("food-item veg");

// // console.log(getting[0].innerHTML = "sadni");

// // let santhosh = document.getElementsByTagName('li');
// // console.log(santhosh);

// // let quer = document.querySelectorAll("div"); // ethu vanthu html array va tharama html node aha value tharum thats call qery selector
// // console.log(quer[1]);

let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const text = document.createTextNode(inputFood.value);

  const comment = document.createComment("Creating a li");

  // Assigning className
  li.className = "food-item";

  // append
  li.append(text);
  li.append(comment);

  foodContainer.append(li);
});










































