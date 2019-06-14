"use strict";
function initContent() {
    console.log("Cooky banner blocker active.");
    var names = ['cookie', 'Cookie', 'COOKIE'];
    hideElements(names);
    function hideElements(nameArray) {
        nameArray.forEach(function (name, index) {
            console.log('Looking for "', name, '", founded: ', document.querySelectorAll("[class*=" + name + "]").length);
            document.querySelectorAll("[class*=" + name + "]").forEach(function (el, i) {
                var e = el;
                e.style.display = "none";
            });
        });
    }
    ;
}
initContent();
//# sourceMappingURL=content.js.map