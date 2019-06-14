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
            var elemensByClassName = document.querySelectorAll("[class*=" + name + "]");
            var count = 0;
            elemensByClassName.forEach(function (el, i) {
                var e = el;
                e.style.display = "none";
            });
            count += elemensByClassName.length;
            var element = document.querySelector("[id*=" + name + "]");
            if (element) {
                element.style.display = "none";
                count++;
            }
            result.content.push({
                name: name,
                count: count
            });
        });
        return result;
    }
    ;
    setTimeout(function () {
        console.log("setTimeout");
        sendMessage(hideElements(names));
    }, 2000);
    function sendMessage(msg) {
        if (port) {
            port.postMessage(msg);
        }
    }
}());
//# sourceMappingURL=content.js.map