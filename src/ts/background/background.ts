(function () {
    var contentPort: chrome.runtime.Port;
    var popUpPort: chrome.runtime.Port;
    var bgMemorie: Message = {
        id: '',
        content: []
    };

    chrome.runtime.onConnect.addListener(function (port) {
        if (port.name == <PortNames>'chr_cookie_c') {
            contentPort = port;
            contentPort.onMessage.addListener(function (msg: Message) {
                contentMsgHandler(msg);
            })
        } else if (port.name == <PortNames>'chr_cookie_p') {
            popUpPort = port;
            popUpPort.onMessage.addListener(function (msg: RequestMessage) {
                requestHandler(msg);
            })
        }
    })

    function contentMsgHandler(msg: Message): void {
        bgMemorie.id = msg.id;
        bgMemorie.content = msg.content;
        sendMessageToPopUp(msg);
    }

    function sendMessageToPopUp(msg: Message): void {
        try {
            popUpPort.postMessage(msg);
        } catch (error) {
            console.log('sendMessageToPopUp', error)
        }
    }

    function requestHandler(msg: RequestMessage): void {
        if (msg == 'getData') {
            sendMessageToPopUp(bgMemorie);
        }
    }
}());