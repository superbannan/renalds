let money = 0;
let upgrades = [];
let upgradePrices = [1, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000]; // Example prices
let upgradeCounter = 0;
let gameMode = 'solo'; // solo or multiplayer
let intervalID;

function selectMode(mode) {
    gameMode = mode;
    document.getElementById("gameModeSelection").style.display = "none";
    document.getElementById("gameArea").style.display = "flex";

    setupUpgrades();
    startRandomButtonTimer();
}

function clickImage() {
    money++;
    updateMoneyDisplay();
}

function updateMoneyDisplay() {
    document.getElementById('moneyDisplay').textContent = `Money: $${money}`;
}

function setupUpgrades() {
    const upgradeSidebar = document.getElementById('upgrades');
    upgrades = []; // Reset upgrades
    upgradeSidebar.innerHTML = ''; // Clear existing upgrades

    for (let i = 0; i < 30; i++) {
        const upgrade = document.createElement('div');
        upgrade.classList.add('upgrade');
        upgrade.textContent = `Upgrade ${i + 1}: $${upgradePrices[i % upgradePrices.length]}`;
        upgrade.addEventListener('click', () => buyUpgrade(i));
        upgradeSidebar.appendChild(upgrade);
    }
}

function buyUpgrade(upgradeIndex) {
    const price = upgradePrices[upgradeIndex % upgradePrices.length];
    if (money >= price) {
        money -= price;
        upgradeCounter++;
        updateMoneyDisplay();
    } else {
        alert("Not enough money!");
    }
}

function startRandomButtonTimer() {
    intervalID = setInterval(() => {
        document.getElementById('randomButton').style.display = 'block';
    }, 120000); // 2 minutes
}

function onRandomButtonClick() {
    alert("You clicked the secret button!");
    document.getElementById('randomButton').style.display = 'none';
}

function addMoney(amount) {
    money += amount;
    updateMoneyDisplay();
}

function resetMoney() {
    money = 0;
    updateMoneyDisplay();
}

function halveMoney() {
    money = Math.floor(money / 2);
    updateMoneyDisplay();
}
