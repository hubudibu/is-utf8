(function() {

    var root = this;

    var UTF8Tester = function (file) {

        var testerPromise = new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var chars  = new Uint8Array(reader.result);
                var utf8 = isUTF8(chars);
                resolve(utf8);
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });

        return testerPromise;

    }

    root.UTF8Tester = UTF8Tester;

}.call(this));
