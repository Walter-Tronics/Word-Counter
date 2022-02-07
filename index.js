let update = document.getElementById("update");
let inputArea = document.getElementById("field");
inputArea.addEventListener('input', ()=>{
    let words = inputArea.value.trim();
    let counter = words.split(/\s+/).filter((item) => item).length;
    update.innerText = counter;
});