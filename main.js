let input = document.querySelector("input");
let addBtn = document.querySelector(".create");
let myList = document.querySelector("ul");

let toDOList = [];


if (localStorage.getItem("tasks")){
    toDOList = JSON.parse(localStorage.getItem("tasks"));
    createElement(toDOList);
}

addBtn.addEventListener("click", () => {
    if (input.value != ""){
        addItem(input.value);
        input.value = "";
    }
});

myList.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")){
        e.target.parentElement.remove();
        toDOList = toDOList.filter((task) => task.id != e.target.parentElement.getAttribute("data-id")); 
        localStorage.setItem("tasks", JSON.stringify(toDOList))
    }
    if (e.target.classList.contains("task")){
        for (let i = 0; i < toDOList.length; i++) {
            if (toDOList[i].id == e.target.getAttribute("data-id")){
                toDOList[i].completed == false? toDOList[i].completed = true : toDOList[i].completed = false;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(toDOList))
        e.target.classList.toggle("done");
    }
});


function addItem (input) {
    const task = {
        name: input,
        id: Date.now(),
        completed: false,
    }
    toDOList.push(task);
    createElement(toDOList);
    localStorage.setItem("tasks",JSON.stringify(toDOList));
};

function createElement(toDOList) {
    myList.innerHTML = "";
    toDOList.forEach((task) => {
        let li = document.createElement('li');
        li.className = "task";
        li.setAttribute("data-id", task.id);
        li.innerHTML = `<input type="checkbox">${task.name}<button class="del">Delete</button>`;
        myList.appendChild(li);
        (task.completed) ? li.classList.add("done"): null;
    });
}













// let toDOList = [];
// if (localStorage.getItem("tasks")){
//     toDOList = JSON.parse(localStorage.getItem("tasks"));
//     createElement(toDOList);
// }

// // getLocal();    >>> instead of createElement

// addBtn.addEventListener("click", () => {
//     if (input.value != ""){
//         addItem(input.value);
//         input.value = "";
//     }
// });

// myList.addEventListener("click", (e) => {
//     if (e.target.tagName = "button"){
//         e.target.parentElement.remove();
//         // removeLocal(e.target.parentElement.getAttribute("data-id")) 
//         toDOList = toDOList.filter((task) => task.id != e.target.parentElement.getAttribute("data-id")); 
//         localStorage.setItem("tasks", JSON.stringify(toDOList))
//     }
// });


// function addItem (input) {
//     const task = {
//         name: input,
//         id: Date.now(),
//         completed: false
//     }
//     toDOList.push(task);
//     createElement(toDOList);
//     // toLocal(toDOList);
//     localStorage.setItem("tasks",JSON.stringify(toDOList));
// };

// function createElement(toDOList) {
//     myList.innerHTML = "";
//     toDOList.forEach((task) => {
//         (task.completed)? li.className="done": null;
//         let li = document.createElement('li');
//         li.setAttribute("data-id", task.id)
//         li.innerHTML = `${task.name}<button>Delete</button>`
//         myList.appendChild(li);
//     });
// }
// function removeLocal (taskId) {
//     toDOList = toDOList.filter((task) => task.id != taskId);
//     localStorage.setItem("tasks", JSON.stringify(toDOList))
// }



// function toLocal(toDOList){
//     localStorage.setItem("tasks",JSON.stringify(toDOList))
// }

// function getLocal () {     >>> instead of createElement
//     let data = window.localStorage.getItem("tasks");
//     if (data) {
//         let tasks = JSON.parse(data);
//         createElement(tasks);
//     }
// }














// let input = document.querySelector('input');
// let createBtn = document.querySelector('.create');
// let container = document.querySelector('.container');
// let tasks = [];

// if (window.localStorage.getItem("tasks")) {
//     tasks = JSON.parse(localStorage.getItem("tasks"))
// }



// createBtn.addEventListener("click", function(){
//     let element = document.createElement('div');
//     let cancelBtn = document.createElement('btn');
//     cancelBtn.classList.add('del');
//     cancelBtn.textContent = "Delete";
//     element.innerHTML = input.value;
    
//     // add task to tasks array
    
    
//     // Delete Button
//     // cancelBtn.addEventListener("click", () => {
//     // element.remove();
//     // tasks.shift()
//     // })
        
        
//     element.style.cssText = "font-size: 15px; padding: 5px; background-color: white; height: 30px; display: flex; align-item: center; justify-content: space-between; line-height: 30px; margin-bottom: 20px"
//     cancelBtn.style.cssText = "color: white; background-color: red; border-radius: 5px; padding: 0 5px; cursor: pointer;";
//     element.appendChild(cancelBtn);
//     container.appendChild(element);


//     tasks.push(input.value);      //   <<<<<<<<<<<<
//     window.localStorage.setItem("tasks", JSON.stringify(tasks))
// })



// if (window.localStorage.getItem("tasks")) {
//     let tasks = JSON.parse(window.localStorage.getItem("tasks"));
//     for (let i = 0; i < tasks.length; i++){
//         let element = document.createElement('div');
//         let cancelBtn = document.createElement('btn');

//         cancelBtn.textContent = "Delete";
//         element.innerHTML = tasks[i];

//         cancelBtn.addEventListener("click", () => {
//             element.remove();
//             localStorage.removeItem("tasks");
//         })

//         element.style.cssText = "font-size: 15px; padding: 5px; background-color: white; height: 30px; display: flex; align-item: center; justify-content: space-between; line-height: 30px; margin-bottom: 20px"
//         cancelBtn.style.cssText = "color: white; background-color: red; border-radius: 5px; padding: 0 5px; cursor: pointer;";
//         element.appendChild(cancelBtn);
//         container.appendChild(element);
//     }
// } 