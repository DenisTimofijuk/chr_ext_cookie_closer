type PortNames = 'chr_cookie_c' | 'chr_cookie_p';
type CookieNames = 'cookie' | 'Cookie' | 'COOKIE';
type RequestMessage = 'getData';

interface CookieContent {
    name: CookieNames,
    count: Number
}

interface Message {
    id: string,
    content: Array<CookieContent> 
}

interface ICallback {
    (result:RequestMessage): void;
}

interface ContCallback {
    (result:Message): void;
}

interface MsgPopUp{
    initOnMessage(callback: ICallback):void;
    sendMsg(msg:Message):void;
}

interface MsgContent{
    initOnMessage(callback: ContCallback):void;
    sendMsg(msg:Message):void;
}