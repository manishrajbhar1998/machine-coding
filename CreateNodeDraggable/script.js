
const addNote = document.querySelector("#add-note");
const input = document.querySelector("#input");
const container = document.querySelector(".main");


let notesArr = [];
addNote.addEventListener("click",(e)=>{
  const inputValue = input.value;
  notesArr.push(inputValue);
  addNoteOnScreen(inputValue)
  input.value = "";
})

const addNoteOnScreen = (note) =>{
    const divEle = document.createElement("div");
    divEle.innerText = note;
    divEle.setAttribute("class","note");
    container.appendChild(divEle);
    divEle.onmousedown = dragMouseDown;
}

let pos1 = 0,
const dragMouseDown = (e) =>{
  e.preventDefault();
}