const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a search term.');
    }
});
const downloadButton = document.querySelector('.download-btn');

const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-btn');

sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        alert(`You: ${message}`);
        chatInput.value = ''; 
    } else {
        alert('Please type a message before sending.');
    }
});
