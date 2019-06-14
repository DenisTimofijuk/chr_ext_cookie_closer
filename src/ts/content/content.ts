(function () {
    var port = chrome.runtime.connect({
        name: <PortNames>'chr_cookie_c'
    })

    // port.onMessage.addListener(function(msg){
    //     //getting messages from background scripts
    // })

    var names: Array<CookieNames> = ['cookie', 'Cookie', 'COOKIE'];

    sendMessage(hideElements(names));

    function hideElements(nameArray: Array<CookieNames>):Message {
        var result: Message = {
            id: 'hideElements',
            content: []
        }

        nameArray.forEach(function (name) {
            result.content.push({
                name: name,
                count: document.querySelectorAll("[class*=" + name + "]").length
            });
            document.querySelectorAll("[class*=" + name + "]").forEach(function (el, i) {
                let e = el as HTMLElement;
                e.style.display = "none";
            })
        })

        return result;
    };

    function sendMessage(msg:Message):void{
        if(port){
            port.postMessage(msg);
        }
    }
}());