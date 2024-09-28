const inputFile = document.querySelector("#input");
const suggBox = document.querySelector("#suggestion-box");

function handleChange(e) {
  const { value } = e.target;
  if (value) {
    handleSearch(value);
  } else {
    reset();
  }
}

async function handleSearch(value) {
  let finterValue = await fetchAutoSuggest(value);
  console.log(finterValue);
  if (finterValue.length > 0) {
    suggBox.classList.add("suggestion-block");
    generateSuggestionFeild(finterValue);
  }
}


function debounce(cd,delay){

  let time;

  return function(){
      if(time) clearTimeout(time);
      time = setTimeout(()=>{
          cd.apply(this,arguments);
      },delay)
  }
}

(() => {
  inputFile.addEventListener("input", debounce(handleChange,1000));
})();

function generateSuggestionFeild(sugg) {
  let fragment = document.createDocumentFragment();

  for (const element of sugg) {
    let div = document.createElement("div");
    div.innerHTML = element;
    div.classList.add("suggest-item");
    div.setAttribute("data-sugg", element);
    fragment.appendChild(div);
  }

  suggBox.innerHTML = "";
  suggBox.append(fragment);
}

function reset() {
  suggBox.classList.remove("suggestion-block");
}
