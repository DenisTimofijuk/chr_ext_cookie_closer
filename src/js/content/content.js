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
            var elemensByClassName = document.querySelectorAll("[class*=" + name + "]").length;
            var count = 0;
            if (elemensByClassName > 0) {
                document.querySelectorAll("[class*=" + name + "]").forEach(function (el, i) {
                    var e = el;
                    e.style.display = "none";
                });
                count = elemensByClassName;
            }
            else {
                var element = document.querySelector("[id*=" + name + "]");
                if (element) {
                    element.style.display = "none";
                    count++;
                }
            }
            result.content.push({
                name: name,
                count: count
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