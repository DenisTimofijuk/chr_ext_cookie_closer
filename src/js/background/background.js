"use strict";
(function () {
    var contentPort;
    var popUpPort;
    var bgMemorie = {
        id: '',
        content: []
    };
    chrome.runtime.onConnect.addListener(function (port) {
        if (port.name == 'chr_cookie_c') {
            contentPort = port;
            contentPort.onMessage.addListener(function (msg) {
                contentMsgHandler(msg);
            });
        }
        else if (port.name == 'chr_cookie_p') {
            popUpPort = port;
            popUpPort.onMessage.addListener(function (msg) {
                requestHandler(msg);
            });
        }
    });
    function contentMsgHandler(msg) {
        bgMemorie.id = msg.id;
        bgMemorie.content = msg.content;
        sendMessageToPopUp(msg);
    }
    function sendMessageToPopUp(msg) {
        try {
            popUpPort.postMessage(msg);
        }
        catch (error) {
            console.log('sendMessageToPopUp', error);
        }
    }
    function requestHandler(msg) {
        if (msg == 'getData') {
            sendMessageToPopUp(bgMemorie);
        }
    }
}());
//# sourceMappingURL=background.js.map