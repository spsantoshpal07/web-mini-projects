const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');
const timeDisplay = document.getElementById('timeDisplay');
const dateDisplay = document.getElementById('dateDisplay');
const timezoneSelector = document.getElementById('timezoneSelector');

function updateClock() {
    const date = new Date();
    const offset = parseFloat(timezoneSelector.value);
    const localTime = date.getTime() + (date.getTimezoneOffset() * 60000) + (offset * 3600000);

    const now = new Date(localTime);
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // Convert to 12-hour format

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6; // Add extra for seconds
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30; // Add extra for minutes

    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

    // Update digital clock display
    timeDisplay.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    dateDisplay.textContent = now.toLocaleDateString();
}

function updateTime() {
    updateClock();
}

setInterval(updateClock, 1000);
updateClock(); // Initial call
