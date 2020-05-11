document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('toggle').onclick = function () {
        highlight();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('save').onclick = function () {
        updateDepths();
    }
})

function updateDepths() {
    var minDepth = document.getElementById('min-depth').value;
    var maxDepth = document.getElementById('max-depth').value;
    var depths = { minDepth, maxDepth };
    console.log('update');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { depth: depths }, function (response) {
            console.log(sent);
        });
    });
}

var toggle = false;

function highlight() {
    console.log('highlight', toggle);
    if (toggle) {
        toggle = false;
        chrome.tabs.executeScript(null, {
            file: "clear.js"
        });
    } else {
        toggle = true;
        chrome.tabs.executeScript(null, {
            file: "highlight.js"
        });
    }
}