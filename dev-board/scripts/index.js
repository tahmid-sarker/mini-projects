// --- 1. Change background color randomly ---
function toggleTheme() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// --- 2. Update and show current date ---
function updateCurrentDate() {
    const currentDay = document.getElementById('current-day');

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const today = new Date();

    const dayName = days[today.getDay()];
    const monthName = months[today.getMonth()];
    const dayNumber = today.getDate();
    const year = today.getFullYear();

    currentDay.innerHTML = `${dayName},<br><strong>${monthName} ${dayNumber}, ${year}</strong>`;
}

// --- 3. Set initial date and keep updating everyday ---
window.onload = function() {
    updateCurrentDate();
};

// --- 4. Mark a task as completed ---
function markComplete(taskTitle, taskButton) {
    const today = new Date();

    const hours = today.getHours(); 
    const minutes = today.getMinutes().toString().padStart(2, '0'); 
    const seconds = today.getSeconds().toString().padStart(2, '0'); 
    const period = hours >= 12 ? 'PM' : 'AM';
    const timeString = `${(hours % 12).toString().padStart(2, '0') || 12}:${minutes}:${seconds} ${period}`;

    const taskTitleText = document.getElementById(taskTitle).textContent;

    const message = `You have completed ${taskTitleText} at ${timeString}`;

    const task = document.createElement('div');
    task.className = 'bg-blue-100 p-2 rounded-lg';
    task.innerHTML = `<span class="text-gray-800">${message}</span>`;

    const activityLog = document.getElementById('activity-log');
    activityLog.appendChild(task);

    const totalTasks = document.getElementById('total-tasks');
    let completedCount = parseInt(totalTasks.textContent);
    totalTasks.textContent = (completedCount + 1).toString().padStart(2, '0');

    const assignedTasks = document.getElementById('assigned-tasks');
    let assignedCount = parseInt(assignedTasks.textContent);
    if (assignedCount > 0) {
        assignedTasks.textContent = (assignedCount - 1).toString().padStart(2, '0');
    }

    alert("Board Updated Successfully");

    taskButton.onclick = null;
    taskButton.classList.remove('text-white', 'cursor-pointer');
    taskButton.classList.add('bg-blue-500', 'opacity-20');

    if (assignedCount - 1 === 0) {
        alert("Congratulations!!! You have completed all the current tasks");
    }
}

// --- 5. Clear the activity log ---
function clearActivityLog() {
    const activityLog = document.getElementById('activity-log');
    activityLog.innerHTML = '';
}