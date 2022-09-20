//back.js
chrome.runtime.onInstalled.addListener(function () {
    const menu = chrome.contextMenus.create({
        id: "alg",
        title: "リンクをコピー"
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "alg":
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: generate
            });
            break;
    }
});

function generate() {
    ASIN = document.querySelector("#ASIN").value;
    navigator.clipboard.writeText("https://amazon.co.jp/dp/" + ASIN);
}
