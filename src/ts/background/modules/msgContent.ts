module msgContent{
    export class init{
        private readonly port: chrome.runtime.Port;

        constructor(p: chrome.runtime.Port){
            this.port = p;
        };

        initOnMessage(callback: ContCallback):void{
            this.port.onMessage.addListener(function(msg: Message){
                callback(msg);
            });
        };

        sendMsg(msg:Message):void{
            try {
                this.port.postMessage(msg);
            } catch (error) {
                console.log('sendMessageToPopUp', error)
            }            
        }
    }
}