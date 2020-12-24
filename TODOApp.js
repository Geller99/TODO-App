
// task list
// button to add new task
// use drag and drop API to delete created tasks
// completed task button
// onButtonClick, generate newTaskList
// create autocomplete array for the search box
// each taskList input is grabbed and stored in an array





(function() {   // using an IIFE to create task elements
    let newElement = 0;
    const btn = document.getElementById('btn');
    const form = document.getElementById('form');
    const div = document.getElementById('newDiv');
    const remove = document.getElementById('reset');

    const addInput = function() {
        newElement++;  // to increment elements onclick

        const input = document.createElement("input");
        const taskCheck =  document.createElement('input')
        const setReminder = document.createElement('button')
        
        taskCheck.setAttribute('type', 'checkbox')
        setReminder.setAttribute('type', 'button');
        setReminder.innerText = "Set Reminder"
        setReminder.id = 'reminder'
        taskCheck.id = 'task'

        input.setAttribute('draggable', 'true')
        setReminder.setAttribute('draggable', 'true')
        taskCheck.setAttribute('draggable', 'true ')

        input.id = 'input-' + newElement;
        input.type = 'text';
        input.placeholder = 'New Task';

        div.appendChild(input)
        div.appendChild(setReminder)

        // append created elements to the form
        form.appendChild(input);
        form.appendChild(taskCheck)
        form.appendChild(setReminder)

    };

    btn.addEventListener('click', function() {
        addInput();
    }.bind(this));
})();

