document.addEventListener('DOMContentLoaded', function(){
    var loginBtn = document.getElementById('loginBtn');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var loginDiv = document.getElementById('login');
    var menu = document.getElementById('menu');
    var content = document.getElementById('content');

    loginBtn.addEventListener('click', function(){
     var name = nameInput.value;
     var email = emailInput.value;

     if (name !== '' && email !== ''){
        loginDiv.style.display = 'none';
        menu.style.display = 'block';
        content.style.display = 'block';
     }
     else{
      alert('please enter both name and email.');
     }
    });
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
    var imageUpload = document.getElementById('imageUpload');
    var imagePreview = document.getElementById('imagePreview');

    imageUpload.addEventListener('change', function(){
var file = imageUpload.files[0];
if(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        imagePreview.innerHTML = '';
        imagePreview.appendChild(img);
    }
    reader.readAsDataURL(file);
}
    });
});