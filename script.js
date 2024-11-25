const display = document.getElementById('countdown');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    startButton.disabled = true; // Disable the button to prevent multiple clicks

    // Countdown values
    const countdownValues = [...Array(10).keys()].reverse().map(n => n + 1).concat("Happy Independence Day!");

    // Callback hell implementation
    const runCountdown = (index) => {
        if (index < countdownValues.length) {
            setTimeout(() => {
                display.innerText = countdownValues[index];
                if (countdownValues[index] === "Happy Independence Day!") {
                    startButton.remove(); // Remove the start button from the DOM
                }
                runCountdown(index + 1); // Move to the next value
            }, 1000);
        }
    };

    runCountdown(0); // Start the countdown
});
