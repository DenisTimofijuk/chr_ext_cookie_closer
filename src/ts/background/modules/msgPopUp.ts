module msgPopUp{
    export class init{
        private readonly port: chrome.runtime.Port;

        constructor(p: chrome.runtime.Port){
            this.port = p;
        };

        initOnMessage(callback: ICallback):void{
            this.port.onMessage.addListener(function(msg: RequestMessage){
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