document.addEventListener('DOMContentLoaded', function() {
    var statusIndicator = document.getElementById('statusIndicator');
    var statusText = document.getElementById('statusText');

    function updateStatus() {
        if (navigator.onLine) {
            statusIndicator.className = 'online';
            statusText.textContent = 'Online';
        } else {
            statusIndicator.className = 'offline';
            statusText.textContent = 'Offline';
        }
    }

    // Initial status check
    updateStatus();

    // Listen for changes in online/offline status
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
});
