"use strict";
document.addEventListener('DOMContentLoaded', function (event) {
    var port = chrome.runtime.connect({
        name: 'chr_cookie_p'
    });
    port.onMessage.addListener(function (msg) {
        displayMessage(msg);
    });
    port.postMessage('getData');
    function displayMessage(msg) {
        msg.content.forEach(function (val) {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.innerHTML = val.name;
            tr.appendChild(td);
            var td = document.createElement('td');
            td.innerHTML = val.count;
            tr.appendChild(td);
            var msgContentTable = document.getElementById('msgContentTable');
            msgContentTable.appendChild(tr);
        });
    }
});
//# sourceMappingURL=popup.js.map