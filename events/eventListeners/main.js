/* Events using eventListeners
Soccer player
○ Create page which has soccer field as bg image
○ In top left corner there should be image of soccer player
○ When user clicks anywhere on the field, the player is moved to that
position
○ Add the button which is used to disable player movement
○ Images ( https://goo.gl/YDjwi4 ) */

document.addEventListener("click", movePlayer);

function movePlayer (){
    var x = event.clientX;
    var y = event.clientY;
    var p = document.querySelector("img");
    p.style.left = x + "px";
    p.style.top = y + "px";
}

function removeHandler() {
    document.removeEventListener("click", movePlayer);
}

document.querySelector("button").addEventListener("click", removeHandler)


