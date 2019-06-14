document.addEventListener('DOMContentLoaded', function (event) {
    var port = chrome.runtime.connect({
        name: <PortNames>'chr_cookie_p'
    })

    port.onMessage.addListener(function (msg: Message) {
        displayMessage(msg);
    })

    port.postMessage(<RequestMessage>'getData');

    function displayMessage(msg: Message): void {
        msg.content.forEach(function(val){
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.innerHTML = val.name;
            tr.appendChild(td);
            var td = document.createElement('td');
            td.innerHTML = val.count as any as string;
            tr.appendChild(td);
            var msgContentTable = <HTMLElement>document.getElementById('msgContentTable');
            msgContentTable.appendChild(tr);
        })
    }
})