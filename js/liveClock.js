
function updateDate() {
    const now = new Date();

   
    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' }); 
    const monthName = now.toLocaleDateString('en-US', { month: 'short' });
    const dayNumber = now.getDate(); 
    const year = now.getFullYear();

    
    document.getElementById('dayOfWeek').innerText = dayName + ',';
    document.getElementById('liveDate').innerText = `${monthName} ${dayNumber}, ${year}`;
}


document.addEventListener("DOMContentLoaded", updateDate);
