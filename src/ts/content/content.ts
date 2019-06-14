function initContent() {
    var names: Array<string> = ['cookie', 'Cookie', 'COOKIE'];

    hideElements(names);

    function hideElements(nameArray: Array<string>) {
        nameArray.forEach(function (name, index) {
            console.log('Looking for "', name, '", founded: ', document.querySelectorAll("[class*=" + name + "]").length);

            document.querySelectorAll("[class*=" + name + "]").forEach(function (el, i) {
                let e = el as HTMLElement;
                e.style.display = "none";
            })
        })
    };
}

initContent();