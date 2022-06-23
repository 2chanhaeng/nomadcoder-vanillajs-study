// if else statements in function
const h1 = document.querySelector("div.hello:first-child h1");
function handleH1Click(){
    const clickedClass = "clicked";
    if(h1.className === clickedClass){
        h1.className = ""
    } else {
        h1.className = clickedClass
    }
}

h1.onclick = handleH1Click;
