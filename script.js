var inputValue = document.getElementById("addText");
var todolist = document.getElementById("todolist");
var addText = document.getElementById("addText");

function newElement() {
  var closeButt = document.createElement("button");
  closeButt.setAttribute("type", "submit");
  closeButt.textContent = "\u00D7";
  closeButt.className = "close";
  var li = document.createElement("li");
  if (inputValue.value === '') {
    alert("write something faggot");
  } else {
    var t = document.createTextNode(inputValue.value);
    li.appendChild(t);
    li.appendChild(closeButt);
    todolist.appendChild(li);
  }
  addText.value = "";

  closeButt.addEventListener("click", function () {
    var i = closeButt.parentElement;
    //  i.style.display = "none"
    //i.textContent = "";
    var ii = i.parentElement;
    ii.removeChild(i);
  })
}

// function close(i) {
//   i = this.parentElement;
//   
// }