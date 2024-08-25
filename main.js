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

window.Telegram.WebApp.ready();

const user = window.Telegram.WebApp.initDataUnsafe.user;

if (user) {
    document.getElementById('username').innerText = user.username || user.first_name || "User";
} else {
    document.getElementById('username').innerText = "User";
}