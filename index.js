let addButtonEl  = document.getElementById("add-button")
let inputFieldEl = document.getElementById("input-field")

addButtonEl.addEventListener("click", function(){
    inputValue =inputFieldEl.value
    //better to define once so you can use it in the rest of the code. 
    console.log(inputValue);
    
})