// Preload script for webviews to forward Command-L to the main renderer
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'l') {
    e.preventDefault();
    if (window.electronAPI && window.electronAPI.focusAddressBar) {
      window.electronAPI.focusAddressBar();
    }
  }
});
