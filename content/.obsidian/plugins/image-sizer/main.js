const { Plugin } = require('obsidian');

module.exports = class ImageResizerPlugin extends Plugin {
  onload() {
    this.applyDynamicImageHeights = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        const alt = img.getAttribute('alt');
        
        if (alt && alt.startsWith('h-')) {
          const size = alt.substring(2); 
          img.style.setProperty('height', size, 'important');
          img.style.setProperty('width', 'auto', 'important');
        }
      });
    };

    this.applyDynamicImageHeights();

    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          this.applyDynamicImageHeights();
        }
      }
    });

    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  onunload() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};