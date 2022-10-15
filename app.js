var tasks=[];

const input=document.getElementById("input");

var button=document.getElementById('button');

var dos=document.getElementById("todolist");

button.onclick=addTasks;

function addTasks(){
    tasks.push(input.value);
     input.value="";
     displayList();
}

function displayList(){
    dos.innerHTML="";
    tasks.forEach(function(item,index){
        dos.innerHTML+="<li>" 
        + item + "<a onclick='edit(" +
         index +")'>Edit</a>" 
         + "<a onclick='deleteTask("
          + index + ")'>&times &nbsp &nbsp </a></li>";
        
    });
}

function deleteTask(index){
    tasks.splice(index,1);
    displayList();
}

function edit(item){
    var updatedTask=prompt("Kindly update the task");
    tasks.splice(item,1,updatedTask);
    displayList();
}