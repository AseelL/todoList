function newElement(){
  var boom = document.createElement("input");
  boom.setAttribute("type","checkbox");
  var li = document.createElement("li");
  var inputValue=document.getElementById("addText").value;
  if (inputValue===''){
    alert("write something faggot");
  }else{
      var t=document.createTextNode(inputValue);
  li.appendChild(boom);
  li.appendChild(t);
  document.getElementById("todolist").appendChild(li);
  }
  document.getElementById("addText").value="";

}