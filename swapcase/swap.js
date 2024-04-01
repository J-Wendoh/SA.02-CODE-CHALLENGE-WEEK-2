document.addEventListener("DOMContentLoaded",()=>{

function swapCase(str) {
    let letters = str.split(' ');//turn the characters in the string into an array of characters
    for (x of letters){
        if (x === x.toUppercase()){
            x.toLowerCase()
        }else{
            x.toUpperCase
        }
    }
    return letters.join('');
}



let form = document.querySelector("form")
let input = document.getElementById("inp")
form.addEventListener("submit",(e) => 
{
    e.preventDefault()
    let par= document.createElement("p")
    let output = swapCase(`${input.value}`);
    console.log(output)
    par.textContent = output
    body.append(par)
    input.value=""
})
})