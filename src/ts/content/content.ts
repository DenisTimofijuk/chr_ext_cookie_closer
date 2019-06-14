(function () {
    var port = chrome.runtime.connect({
        name: <PortNames>'chr_cookie_c'
    })

    // port.onMessage.addListener(function(msg){
    //     //getting messages from background scripts
    // })

    var names: Array<CookieNames> = ['cookie', 'Cookie', 'COOKIE'];

    sendMessage(hideElements(names));

    function hideElements(nameArray: Array<CookieNames>): Message {
        var result: Message = {
            id: 'hideElements',
            content: []
        }

        nameArray.forEach(function (name) {
            var elemensByClassName = document.querySelectorAll("[class*=" + name + "]");
            var count: number = 0;

            elemensByClassName.forEach(function (el, i) {
                let e = el as HTMLElement;
                e.style.display = "none";
            })

            count += elemensByClassName.length;

            var element = <HTMLElement>document.querySelector("[id*=" + name + "]");
            if (element) {
                element.style.display = "none";
                count++;
            }


            result.content.push({
                name: name,
                count: count
            });

        })

        return result;
    };

    setTimeout(function () {
        console.log("setTimeout")
        sendMessage(hideElements(names));
    }, 2000);

    function sendMessage(msg: Message): void {
        if (port) {
            port.postMessage(msg);
        }
    }
}());