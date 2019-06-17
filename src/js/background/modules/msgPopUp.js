"use strict";
var msgPopUp;
(function (msgPopUp) {
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
    msgPopUp.init = init;
})(msgPopUp || (msgPopUp = {}));
//# sourceMappingURL=msgPopUp.js.map