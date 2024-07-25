const messagesContainer = document.querySelector('main'); //Messages wrapper
const messageInput = document.querySelector("#messageInput"); //messageInput


function sendMessage(){
    messagesContainer.innerHTML +=
    "<div class='bubble bubble-out'><span>" +
    messageInput.value +
    "</span></div>"; //Show the new message
 
    messageInput.value ="" //Clear the input

}


const darkColor = "rgb(51, 51, 51)";
const lightColor = "beige"
const themeToggle = document.querySelector("button#themeToggle") 

function toggleTheme(){
    // si fondo negro, entonces poner fondo beige
    //si no, poner fondo negro
    if(document.body.style.backgroundColor == darkColor) 
        {document.body.style.backgroundColor = "beige"
    themeToggle.innerText = "☀️"; 
}
else  {
    document.body.style.backgroundColor = darkColor;
    themeToggle.innerText = "🌙";
    }
   
}