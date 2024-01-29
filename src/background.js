chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.startsWith("https://github.com/")) {
        chrome.action.setIcon({ tabId, path: "icon_32.png" });
        chrome.action.setPopup({ tabId, popup: "popup.html" });
    } else {
        chrome.action.setIcon({ tabId, path: "icon_32_disabled.png" });
        chrome.action.setPopup({ tabId, popup: "popup_disabled.html" });
    };
});

chrome.runtime.onInstalled.addListener(function (object) {
    // let externalUrl = "https://github.com/ranashreyas/nbgitpuller-link-generator-webextension/blob/popout/usage.md";
    let externalUrl = "https://github.com/berkeley-dsep-infra/nbgitpuller-link-generator-webextension/blob/main/usage.md"

    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: externalUrl }, function (tab) {

        });
    }
});
