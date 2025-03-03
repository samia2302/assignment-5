
document.querySelector(".date span").textContent = new Date().toDateString();


const colors = ["#f8e7dc", "#ddebf8", "#e8f5e9", "#fff3cd", "#e3f2fd"];
let colorIndex = 0;

document.querySelector(".roundy").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});


document.getElementById("discoverBtn").addEventListener("click", function () {
    window.location.href = "index1.html";
});


const completedBtn = document.getElementsByClassName("completed");
let completedCount = 0;

for (let i = 0; i < completedBtn.length; i++) {
    completedBtn[i].addEventListener("click", function (event) {
        let clickedBtn = event.target; 
        let parentCard = clickedBtn.parentNode.parentNode; 

        let taskName = parentCard.querySelector("h3").textContent; 
        let currentTime = new Date().toLocaleTimeString();

        
        if (alert("Board updated successfully!")) {
            updateTaskCount();
        } else {
            updateTaskCount();
        }

        completedCount++;

        
        let notification = document.querySelector(".half-round label");
        notification.textContent = parseInt(notification.textContent) + 1;

        
        const activityLog = document.querySelector(".activity-log");
        let newLog = document.createElement("p");
        newLog.textContent = `You've completed the task: ${taskName} at ${currentTime}`;
        activityLog.appendChild(newLog);

        
        clickedBtn.classList.add("disabled");

        
        if (completedCount === 6) {
            setTimeout(function () {
                alert("Congrats! You've completed all the tasks successfully!");
            }, 100); // 
        }
    });
}


function updateTaskCount() {
    let taskAssigned = document.querySelector(".ttask span");
    let taskNum = parseInt(taskAssigned.textContent);

    if (taskNum > 0) {
        taskAssigned.textContent = taskNum - 1;
    } else {
        taskAssigned.textContent = "0";
    }
}


document.querySelector(".clear-history").addEventListener("click", function () {
    const activity = document.querySelectorAll(".activity-log p");
    for (let i = 0; i < activity.length; i++) {
        activity[i].remove();
    }
});
