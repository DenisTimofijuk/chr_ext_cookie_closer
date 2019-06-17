"use strict";
var msgContent;
(function (msgContent) {
    var init = (function () {
        function init(p) {
            this.port = p;
        }
        ;
        init.prototype.initOnMessage = function (callback) {
            this.port.onMessage.addListener(function (msg) {
                callback(msg);
            });
        };
        ;
        init.prototype.sendMsg = function (msg) {
            try {
                this.port.postMessage(msg);
            }
            catch (error) {
                console.log('sendMessageToPopUp', error);
            }
        };
        return init;
    }());
    msgContent.init = init;
})(msgContent || (msgContent = {}));
//# sourceMappingURL=msgContent.js.map