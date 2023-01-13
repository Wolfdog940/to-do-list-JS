let input =document.getElementById("todoInput");

let button =document.getElementById("button")
let ul=document.getElementById("ul")

button.addEventListener("click",function(){

    let str =input.value.trim()
    let add=str.charAt(0).toUpperCase() + str.slice(1)
    let newbutton =document.createElement("button")
    
    

    if (add.length){
    
    let lista=document.createElement("li");
    lista.innerHTML=add
    ul.appendChild(lista)
    lista.appendChild(newbutton)
    input.value=""
    
    newbutton.addEventListener("click",function(){
        console.log(lista)
        ul.removeChild(lista)
    
     })
    lista.addEventListener("click",function(){
        console.log(lista)
        lista.style.color="black"
        lista.innerHTML=add.strike()
        lista.appendChild(newbutton)
    
     })
}
    else{
        alert("el input esta vacio")
    }
    
   
   
 })







