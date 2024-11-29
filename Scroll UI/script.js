

let header = document.querySelector("header");


scrollWidth(50)
function scrollWidth(unit){
    header.style.width = `${unit}%`
}

window.addEventListener("scroll",(e)=>{
  
    let docHeight = document.documentElement.scrollHeight
    let winHeight = window.innerHeight;
    let scrollHeight = document.documentElement.scrollTop;
    // console.log("docHeight :: ",docHeight);
    // console.log("winHeight :: ",winHeight);
    console.log("scrollHeight :: ",scrollHeight);

    const percent = Math.floor(((winHeight + scrollHeight)/ docHeight) * 100);
    console.log(percent);
    scrollWidth(percent);
})



