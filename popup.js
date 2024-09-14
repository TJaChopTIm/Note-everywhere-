document.addEventListener('DOMContentLoaded', function () {
    // Draw button
    document.getElementById('draw').addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content_script.js']
        }, () => {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'enableDrawing' });
        });
      });
    });
  
    // Highlight button
    document.getElementById('highlight').addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content_script.js']
        }, () => {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'enableHighlighting' });
        });
      });
    });
  
    // Add Note button
    document.getElementById('addNote').addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content_script.js']
        }, () => {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'addNote' });
        });
      });
    });

    // Clear
    document.getElementById('clear').addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'clearAll' });
      });
    });
  
    // Save As Image button
    document.getElementById('saveAsImage').addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content_script.js']
        }, () => {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'saveAsImage' });
        });
      });
    });
  });
  