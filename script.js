const hex = document.querySelector(".hex");
const btn = document.querySelector(".reset");


const generateColor =()=>{
    let changeColor = Math.random().toString(16).substring(2,8);

    document.body.style.backgroundColor = "#" + changeColor;
    hex.innerHTML = "#" + changeColor;
}

btn.addEventListener("click", generateColor);







/*  
task:    1) make function
    2) function conttains variable that generates color
    3) color changes in document.body.color that is equal to the variable that generates color;
    4) depict the color ganarrator on the screen when you prees the button
    5)   */