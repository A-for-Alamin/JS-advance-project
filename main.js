const inputText = document.getElementById("input-text");
const addTaskBtn = document.getElementById("add-task-btn");
const taskContent = document.getElementById("task-content");
const progress = document.getElementById("progress");

let completeCount = 0;
let incompleteCount = 0;




function addTask() {
    let li = document.createElement("li");
    taskContent.insertBefore(li, taskContent.children[0]);

    li.innerHTML = `<span><p>${inputText.value.trim()}</p></span>
    `;


    // Create Span Tag
    let = span = document.createElement("span");
    li.appendChild(span);


    // Create Edit Button 
    let = editIcon = document.createElement("i");
    span.appendChild(editIcon);

    editIcon.classList.add("fa");
    editIcon.classList.add("fa-pen");

    editIcon.addEventListener("click", function(e) {

        let div = document.createElement("div");
        document.body.appendChild(div);

        div.classList.add("newInput");
        div.innerHTML = `<label for="newInput">Edit Task:</label>
        <input type="text" id="newInput" value="${this.parentElement.parentElement.firstChild.firstChild.textContent}">
        <button id="newTaskBtn">Ok</button>`;

        document.getElementById("newTaskBtn").addEventListener("click", () => {
            e.target.parentElement.parentElement.firstChild.firstChild.textContent = document.getElementById("newInput").value;

            div.remove();
        });

    });



    // Create Delete Button 
    let = deleteIcon = document.createElement("i");
    span.appendChild(deleteIcon);
    
    deleteIcon.classList.add("fa");
    deleteIcon.classList.add("fa-trash");

    deleteIcon.addEventListener("click", (e) =>{
        e.target.parentElement.parentElement.remove();

        if (!li.classList.contains('completed')) {
            incompleteCount--;
        } else {
            completeCount--;
        }

        updateTaskCount()
    });



    // Create Select Items Function
    li.firstChild.addEventListener("click", () => {
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            completeCount++;
            incompleteCount--;
        } else {
            completeCount--;
            incompleteCount++;
        };

        updateTaskCount()
    });

};



function updateTaskCount() {
    document.getElementById('total-count').textContent =  taskContent.childElementCount;
    document.getElementById('complete-count').innerText =  completeCount;
    document.getElementById('incomplete-count').innerText = incompleteCount;

    progress.max = taskContent.childElementCount;
    progress.value = completeCount;
}




addTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (inputText.value == "") {
        notifi();
    } else {
        addTask();
        incompleteCount++;
    };

    inputText.value = "";

    updateTaskCount();
});



// Enter Key Press to Add Task 
inputText.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});



// Empty Input Notification Function 
function notifi() {
    const emptyMsg = '<i class="fa fa-circle-exclamation"></i>Empty Input, Check again';
    
    let toast = document.createElement("div");
    document.body.appendChild(toast);

    toast.classList.add("toast");
    toast.innerHTML = emptyMsg;

    setTimeout(() => {
        toast.remove();
    },1500);
    
};