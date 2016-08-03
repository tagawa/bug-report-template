'use strict';

/*
Called when the item has been created, or when creation failed due to an error.
*/
function onCreated(n) {
  if (chrome.runtime.lastError) {
    console.log("Extension error creating item:" + chrome.runtime.lastError);
  }
}

/*
Create the context menu item.
*/
chrome.contextMenus.create({
  id: "add-template",
  title: chrome.i18n.getMessage("contextMenuLabel"),
  type: "normal",
  contexts: ["editable"]
}, onCreated);

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === 'add-template') {
      console.log('Adding template');

      chrome.tabs.executeScript(tab.id, {file: "content.js"}, function() {
          console.log('executeScript: ' + tab.id);
      });
    }
});
