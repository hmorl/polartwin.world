function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function disableMouseInteraction(selector) {
    document.querySelectorAll(selector).forEach((element) => {
      element.style.pointerEvents = "none";
    });
  }

  function enableMouseInteraction(selector) {
    document.querySelectorAll(selector).forEach((element) => {
      element.style.pointerEvents = "all";
    });
  }

  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = parseInt(e.clientX);
    pos4 = parseInt(e.clientY);
    document.onmouseup = dragMouseUp;
    document.onmousemove = elementDrag;
    disableMouseInteraction("iframe");

    return false;
  }

  function elementDrag(e) {
    e = e || window.event;
    pos1 = pos3 - parseInt(e.clientX);
    pos2 = pos4 - parseInt(e.clientY);
    pos3 = parseInt(e.clientX);
    pos4 = parseInt(e.clientY);
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    disableMouseInteraction("a");
  }

  function dragMouseUp() {
    document.onmouseup = null;
    document.onmousemove = null;
    enableMouseInteraction("iframe");
    enableMouseInteraction("a");
  }
}

var draggableElements = document.getElementsByClassName("draggable");

for (var i = 0; i < draggableElements.length; i++) {
  dragElement(draggableElements[i]);
}

var canvas = document.getElementById("background-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var hydra = new Hydra({
  canvas: document.getElementById("background-canvas"),
  detectAudio: false,
});
