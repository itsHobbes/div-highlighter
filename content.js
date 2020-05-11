var MIN_PARENT_COUNT = 0;
var MAX_PARENT_COUNT = 3;

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        MIN_PARENT_COUNT = request.depth.minDepth;
        MAX_PARENT_COUNT = request.depth.maxDepth;
    });