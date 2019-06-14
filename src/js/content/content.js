"use strict";
(function () {
    var port = chrome.runtime.connect({
        name: 'chr_cookie_c'
    });
    var names = ['cookie', 'Cookie', 'COOKIE'];
    sendMessage(hideElements(names));
    function hideElements(nameArray) {
        var result = {
            id: 'hideElements',
            content: []
        };
        nameArray.forEach(function (name) {
            result.content.push({
                name: name,
                count: document.querySelectorAll("[class*=" + name + "]").length
            });
            document.querySelectorAll("[class*=" + name + "]").forEach(function (el, i) {
                var e = el;
                e.style.display = "none";
            });
        });
        return result;
    }
    ;
    function sendMessage(msg) {
        if (port) {
            port.postMessage(msg);
        }
    }
}());
//# sourceMappingURL=content.js.map