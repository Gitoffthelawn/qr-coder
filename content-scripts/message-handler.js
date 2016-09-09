var crossBrowser = crossBrowser ||
  (typeof chrome === "object" && typeof chrome.hasOwnProperty === "function" && chrome.hasOwnProperty("extension") ?
    chrome : browser);

crossBrowser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (!sender.tab) {
    QRCoder.showOverlay(request.data, request.isDataFromSelection);
  }
});