document.addEventListener('DOMContentLoaded', function(){
    var addTaskBtn =
    document.getElementById('addTaskBtn');
    var taskInput = 
    document.getElementById('taskInput');
    var taskList = 
    document.getElementById('taskList');
    
    addTaskBtn.addEventListener('click', function(){
        var taskText = 
        taskInput.value;
        if (taskText !==''){
            var li=
            document.createElement('li');
            li.textContent =
            taskText;

            var removeBtn =
            document.createElement('button');
            removeBtn.textContent =
            'Remove';
            removeBtn.style.marginLeft =
            '10px';
            removeBtn.addEventListener('click', function(){
                taskList.removeChild(li);
            });
            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = '';
        }

    });
});