// let main = document.getElementById("main");

// let div = document.createElement("div");

// let add =  document.createTextNode("THIS ADD SOME KIND OF MESSAGE");
// div.append(add);
// console.log(div , add);

// main.append(div);
// console.log(main);

function createAlertViaDOM(message) {
    const main = document.getElementById("main");
  
    // Creating div element
    const div = document.createElement("div");
    const textNode = document.createTextNode(message);
  
    // Assigning className
    div.className = "alert";
  
    // Append
    div.append(textNode);
    main.append(div);
  }
  
  createAlertViaDOM("Food is updated");
