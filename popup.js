document.getElementById('addButton').addEventListener('click', function() {
  const hostname = document.getElementById('hostnameInput').value;
  if (hostname) {
    chrome.storage.local.get('delayedSites', function(data) {
      let sites = data.delayedSites || [];
      if (!sites.includes(hostname)) {
        sites.push(hostname);
        chrome.storage.local.set({ 'delayedSites': sites }, function() {
          updateList(sites);
        });
      }
    });
  }
});

function updateList(sites) {
  const list = document.getElementById('hostnameList');
  list.innerHTML = '';
  sites.forEach(site => {
    let li = document.createElement('li');
    li.textContent = site;
    list.appendChild(li);
  });
}

// On popup load, display the list of delayed sites
chrome.storage.local.get('delayedSites', function(data) {
  updateList(data.delayedSites || []);
});

// Fetch the current tab's hostname and set it as the input value
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let url = new URL(tabs[0].url);
  document.getElementById('hostnameInput').value = url.hostname.replace('www.', '');
});
