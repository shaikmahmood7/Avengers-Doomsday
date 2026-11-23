
// Avengers: Doomsday India Release Date
// December 17, 2026 - 12:00 AM IST

const releaseDate = new Date(
    "2026-12-17T00:00:00+05:30"
).getTime();

// Get HTML elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdown = document.getElementById("countdown");

// Function to update countdown
function updateCountdown() {

    // Current date and time
    const now = new Date().getTime();

    // Difference between release date and current date
    const difference = releaseDate - now;

    // Check if countdown is finished
    if (difference <= 0) {

        countdown.innerHTML = `
            <h2 class="release-message">
                DOOMSDAY HAS ARRIVED!
            </h2>
        `;

        return;
    }

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    // Display values with leading zero
    daysElement.textContent = String(days).padStart(2, "0");

    hoursElement.textContent = String(hours).padStart(2, "0");

    minutesElement.textContent = String(minutes).padStart(2, "0");

    secondsElement.textContent = String(seconds).padStart(2, "0");
}

// Run countdown immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);


// CREATE BACKGROUND PARTICLES

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    // Random horizontal position
    particle.style.left = Math.random() * 100 + "%";

    // Random animation duration
    particle.style.animationDuration =
        (Math.random() * 10 + 5) + "s";

    // Random animation delay
    particle.style.animationDelay =
        (Math.random() * 10) + "s";

    // Random particle size
    const size = Math.random() * 3 + 1;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particleContainer.appendChild(particle);
}
