document.getElementById("addBtn").onclick = function() {
    let taskData = document.getElementById("input").value;
    if (taskData) {
        let newTask = document.createElement("li");
        newTask.innerHTML = 
        '<div class="task">'+
        '<span class="check"></span>'+
        taskData+
        '</div>'+
        '<div class="actions">'+
        '<span class="star">☆</span>' +
        '<span class="delete">X</span>'+
        '</div>';
        newTask.classList.add("animate_animated", "animate_fadeInUp");
        document.getElementById("taskList").appendChild(newTask);
        controller();
        document.getElementById("input").value = "";
    }
}
function controller() {
    document.querySelectorAll(".check").forEach(function(circle) {
        circle.onclick = function() {
            let task = this.parentElement.parentElement;
            task.classList.toggle("completed");
        }
    });
    document.querySelectorAll(".delete").forEach(function(cross) {
        cross.onclick = function() {
            let task = this.parentElement.parentElement;
            task.classList.add("animate_animated", "animate_fadeOutRight");
            setTimeout(function() {
                task.remove();
            }, 500);
        }
    });
    document.querySelectorAll(".star").forEach(function(star) {
        star.onclick = function() {
            if(this.textContent === "☆") {
                this.textContent = "★";
                this.style.color = "yellow";
                this.classList.add("animate_animated", "animate_slideInDown");
                document.getElementById("taskList").insertBefore(this.parentElement.parentElement, document.getElementById("taskList").firstChild);
            }
            else{
                this.textContent = "☆";
                this.style.color = "white";
                this.classList.add("animate_animated", "animate_slideInUp");
                document.getElementById("taskList").appendChild(this.parentElement.parentElement);

            }
        }
    });
}