chrome.storage.local.get('delayedSites', function(data) {
  let sites = data.delayedSites || [];
  let currentHostname = window.location.hostname.replace('www.', '');
  if (sites.includes(currentHostname)) {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = '#000';  // Solid black background
      overlay.style.color = 'white';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = '10000';
      overlay.style.pointerEvents = 'none';  // Prevent interaction
      overlay.innerText = 'Wait for 30 seconds. This is a boring message.';
      document.body.appendChild(overlay);

      setTimeout(() => {
          overlay.remove();
      }, 30000);
  }
});
