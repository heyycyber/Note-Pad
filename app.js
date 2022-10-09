submit = document.getElementById("submit");
submit.onclick = function () {
  addDiv();
};
function addDiv() {
  var div = document.createElement("span");
  var input = document.getElementById("input").value;
  var color = document.getElementById("colors").value;
  var fontColor = document.getElementById("fontColors").value;
  var dlt = document.createElement("span");
  var done = document.createElement("input");
  div.innerText = input;
  div.style.backgroundColor = color;
  div.style.color = fontColor;
  div.setAttribute("id", "cell");
  div.className = "cell";
  dlt.setAttribute("id", "close");
  dlt.classList.add("close");
  dlt.innerHTML = "&times;";
  done.type = "checkbox";
  done.setAttribute("id", "check");
  done.classList.add("done");
  done.onclick = function () {
    doneNote();
  };
  function doneNote() {
    dlt.style.display = "block";
    done.style.display = "none";
  }
  if (input.length == "") {
    div.style.display = "none";
  } else if (input == " ") {
    div.style.display = "none";
  }
  div.appendChild(dlt);
  div.appendChild(done);
  document.getElementById("pasteHere").appendChild(div);

  function remove() {
    cellDlt = cell.selectedIndex;
    div.remove(cell[cellDlt]);
  }

  dlt.onclick = remove;
}
