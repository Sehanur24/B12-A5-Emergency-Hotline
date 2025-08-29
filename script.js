// State variables
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;
let callHistory = [];

// DOM elements
const emergencyCardsContainer = document.getElementById('emergency-cards');
const callHistoryContainer = document.getElementById('call-history');
const clearHistoryButton = document.getElementById('clear-history');
const heartCountElement = document.getElementById('heart-count');
const copyCountElement = document.getElementById('copy-count');
const coinCountElement = document.getElementById('coin-count');

// Initialize the page
function init() {
    updateUI();
    
    // Add event listeners
    clearHistoryButton.addEventListener('click', clearCallHistory);
    
    // Add event listeners to buttons
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', handleLike);
    });
    
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', handleCopy);
    });
    
    document.querySelectorAll('.call-btn').forEach(btn => {
        btn.addEventListener('click', handleCall);
    });
}

// Handle like button click
function handleLike(e) {
    const heartIcon = e.target;
    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid');
    
    if (heartIcon.classList.contains('fa-solid')) {
        heartIcon.classList.add('text-red-500');
        heartCount++;
    } else {
        heartIcon.classList.remove('text-red-500');
        heartCount = Math.max(0, heartCount - 1);
    }
    
    updateUI();
}

// Handle copy button click
function handleCopy(e) {
    const number = e.target.closest('.copy-btn').dataset.number;
    const name = e.target.closest('.copy-btn').dataset.name;
    
    // Copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
        alert(`Copied ${name} number: ${number}`);
        
        // Increase copy count
        copyCount++;
        updateUI();
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy number');
    });
}

// Handle call button click
function handleCall(e) {
    const number = e.target.closest('.call-btn').dataset.number;
    const name = e.target.closest('.call-btn').dataset.name;
    
    // Check if user has enough coins
    if (coinCount < 20) {
        alert('Not enough coins! You need at least 20 coins to make a call.');
        return;
    }
    
    // Deduct coins
    coinCount -= 20;
    
    // Show alert
    alert(`Calling ${name} at ${number}`);
    
    // Add to call history
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    
    callHistory.unshift({
        name,
        number,
        time: timeString
    });
    
    // Update UI
    updateUI();
    renderCallHistory();
}

// Render call history
function renderCallHistory() {
    if (callHistory.length === 0) {
        callHistoryContainer.innerHTML = '<p class="text-center text-gray-500 py-8">No call history yet</p>';
        return;
    }
    
    callHistoryContainer.innerHTML = '';
    
    callHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'p-4 rounded-lg bg-gray-50';
        historyItem.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h4 class="font-semibold">${item.name}</h4>
                    <p class="text-lg">${item.number}</p>
                </div>
                <span class="text-sm text-gray-500">${item.time}</span>
            </div>
        `;
        
        callHistoryContainer.appendChild(historyItem);
    });
}

// Clear call history
function clearCallHistory() {
    callHistory = [];
    renderCallHistory();
}

// Update UI elements
function updateUI() {
    heartCountElement.textContent = heartCount;
    copyCountElement.textContent = copyCount;
    coinCountElement.textContent = coinCount;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);