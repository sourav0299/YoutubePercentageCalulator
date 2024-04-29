// Function to calculate the percentage watched
function calculatePercentageWatched() {
    const video = document.querySelector('video');
    if (video) {
        const currentTime = video.currentTime;
        const duration = video.duration;
        if (duration > 0) {
            const percentage = (currentTime / duration) * 100;
            return percentage.toFixed(2); // Limit to one decimal place
        }
    }
    return 0;
}

// Function to update the percentage watched text
function updatePercentageWatched() {
    const percentage = calculatePercentageWatched();
    let percentageText = document.getElementById('ytWatchPercentage');
    if (!percentageText) {
        percentageText = document.createElement('div');
        percentageText.id = 'ytWatchPercentage';
        percentageText.style.color = 'green';
        percentageText.style.position = 'absolute';
        percentageText.style.bottom = '10px';
        percentageText.style.left = '10px';
        percentageText.style.zIndex = '9999';
        document.body.appendChild(percentageText);
    }
    percentageText.textContent = `${percentage}% watched`;
}

// Update the percentage watched when the video time changes
document.querySelector('video').addEventListener('timeupdate', updatePercentageWatched);

// Initial update
updatePercentageWatched();
