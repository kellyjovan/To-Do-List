var numOfLi = 0;
var ul = document.getElementById("list");
var trash = document.getElementsByClassName("trash");
var edit = document.getElementsByClassName("edit");

function removeTaskBtn()
{
    trash[numOfLi].addEventListener('click', function(e)
    {
        e || window.event;
        var target = e.target || e.srcElement;
        ul.removeChild(target.parentNode);
        numOfLi--;
        if(numOfLi == 0)
        {
            displayNoTasks();
        }
    });
}

function editTaskBtn()
{
    edit[numOfLi].addEventListener('click', function(e)
    {
        e || window.event;
        var target = e.target || e.srcElement;
        var editTask = document.getElementById("editTask").value;
        target.parentNode.children[0].innerHTML = editTask;
    });
}

function addItem()
{
  var newTask = document.getElementById('newTask').value;
  if(newTask.length != 0)
  {
      if(numOfLi == 0)
      {
         ul.removeChild(document.getElementsByTagName("li")[0]);
      }

      var li = document.createElement("li");
      //li.appendChild(document.createTextNode(newTask));
      li.innerHTML = '<p class="task">' + newTask + '</p><i class="icon trash fa fa-trash"></i><i class="icon edit fa fa-pencil"></i>';
    //   li.innerHTML = '<input class="taskInput" type="text" disabled="disabled" value="' + newTask + '>';
      ul.appendChild(li);
      editTaskBtn();
      removeTaskBtn();
      numOfLi++;
      document.getElementById('newTask').value = "";
  }
}

function displayNoTasks()
{
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("No Tasks for Today"));
  ul.appendChild(li);
}

displayNoTasks();

// trash.addEventListener('click', function(e)
// {
//     // e || window.event;
//     // var target = e.target.parentNode || e.srcElement.parentNode;
//     // ul.removeChild(target);
//     alert("clicked");
// });
