
document.addEventListener("click",
function(e){
    testDiv.style.width = `${e.pageX}px`;
    testDiv.style.height = `${e.pageY}px`;
}
)