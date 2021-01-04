/// preload.js
/// Original file used Electron-quick-start - https://github.com/electron/electron-quick-start
/// Modified by JackTheFlap 04/01/2020 17:46
/// Version v0.1.0
///

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  })
  