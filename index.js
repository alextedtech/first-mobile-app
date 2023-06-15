import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings ={
    databaseURL:"https://realtime-database-1ee63-default-rtdb.firebaseio.com/"}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

let addButtonEl  = document.getElementById("add-button");
let inputFieldEl = document.getElementById("input-field");


addButtonEl.addEventListener("click", function(){
    let inputValue =inputFieldEl.value;
    push(shoppingListInDB, inputValue)
    //better to define once so you can use it in the rest of the code. 
    console.log(inputValue);
    
})