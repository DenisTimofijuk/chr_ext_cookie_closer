(function () {
    var contentPort: MsgContent;
    var popUpPort: MsgPopUp;
    var bgMemorie: Message = {
        id: '',
        content: []
    };

    chrome.runtime.onConnect.addListener(function (port) {
        if (port.name == <PortNames>'chr_cookie_c') {
            contentPort = new msgContent.init(port);
            contentPort.initOnMessage(function (msg) {
                contentMsgHandler(msg);
            })
        } else if (port.name == <PortNames>'chr_cookie_p') {
            popUpPort = new msgPopUp.init(port);
            popUpPort.initOnMessage(function (msg) {
                requestHandler(msg);
            });
        }
    })

    function contentMsgHandler(msg: Message): void {
        bgMemorie.id = msg.id;
        bgMemorie.content = msg.content;
        sendMessageToPopUp(bgMemorie);
    }

    function sendMessageToPopUp(msg: Message): void {
        try {
            popUpPort.sendMsg(msg);
        } catch (error) {

        }
    }

    function requestHandler(msg: RequestMessage): void {
        if (msg == 'getData') {
            sendMessageToPopUp(bgMemorie);
        }
    }
}());