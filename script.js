document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const loginPanel = document.getElementById('loginPanel');
    const closeBtn = document.getElementById('closePanel');
    const overlay = document.getElementById('overlay');
    const loginForm = document.getElementById('loginForm');

    // Open panel with slide-in
    loginBtn.addEventListener('click', function() {
        loginPanel.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close panel
    function closePanel() {
        loginPanel.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    // Form submission (placeholder - will redirect to Discord OAuth)
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const discordId = document.getElementById('discordId').value;
        if (discordId) {
            // Placeholder: In real app, send to backend for OAuth
            alert(`Logging in with Discord ID: ${discordId}. Redirecting...`);
            // Example OAuth URL (replace with your client ID/redirect URI)
            // window.location.href = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify`;
        }
    });
});
