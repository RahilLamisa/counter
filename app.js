let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser install prompt
  event.preventDefault();
  // Save the event for later use
  
  deferredPrompt = event;
  // Show your custom install button
  document.getElementById('install-button').style.display = 'block';
});

document.getElementById('install-button').addEventListener('click', () => {
  // Show the browser's install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    // Clear the saved prompt event
    deferredPrompt = null;
  });
});