let balance = 0;
let storage = 2.00;



document.getElementById('claim-button').addEventListener('click', function() {
    balance += storage;
    document.getElementById('balance').innerText = balance.toFixed(2);
});

// Storage count increment every hour
setInterval(function() {
    storage += 2.00;
    document.getElementById('storage').innerText = storage.toFixed(2);
}, 3600000); // 1 hour = 3600000 ms

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the Telegram Web App is initialized and the user is accessible
    if (typeof Telegram !== 'undefined' && Telegram.WebApp && Telegram.WebApp.initDataUnsafe) {
        const user = window.Telegram.WebApp.initDataUnsafe.user;

        if (user) {
            let username = user.username || user.first_name || 'Unknown';
            if (username.length > 10) {
                username = username.substring(0, 10) + '...';
            }
            document.getElementById('username').innerText = username;

            const storedBalance = localStorage.getItem(`balance_${user.id}`);
            if (storedBalance !== null) {
                balance = parseFloat(storedBalance);
            }
            updateDisplay();
        } else {
            alert("Unable to get Telegram user info.");
        }
    } else {
        alert("Telegram Web App API is not available.");
    }
});
