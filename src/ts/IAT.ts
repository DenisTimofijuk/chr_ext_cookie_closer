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