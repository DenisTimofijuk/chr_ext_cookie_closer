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
            contentPort = new msgContent.init(port);
            contentPort.initOnMessage(function (msg) {
                contentMsgHandler(msg);
            });
        }
        else if (port.name == 'chr_cookie_p') {
            popUpPort = new msgPopUp.init(port);
            popUpPort.initOnMessage(function (msg) {
                requestHandler(msg);
            });
        }
    });
    function contentMsgHandler(msg) {
        bgMemorie.id = msg.id;
        bgMemorie.content = msg.content;
        sendMessageToPopUp(bgMemorie);
    }
    function sendMessageToPopUp(msg) {
        try {
            popUpPort.sendMsg(msg);
        }
        catch (error) {
        }
    }
    function requestHandler(msg) {
        if (msg == 'getData') {
            sendMessageToPopUp(bgMemorie);
        }
    }
}());
//# sourceMappingURL=background.js.map