#UTF-8 detector
fork of [wayfind's node.js solution](https://github.com/wayfind/is-utf8)

####Check if buffer is UTF-8 encoded -- in node.js

    var fs = require('fs');
    var isUtf8 = require('is-utf8');
    var ansi = fs.readFileSync('ansi.txt');
    var utf8 = fs.readFileSync('utf8.txt');

    console.log('ansi.txt is utf8: '+isUtf8(ansi));
    console.log('utf8.txt is utf8: '+isUtf8(utf8));

####Check if file selected for upload is UTF-8 encoded -- in the browser

    var input = document.getElementById('input');

    input.addEventListener('change', function(){
        var fileList = this.files;
        UTF8Tester(fileList[0]).then(function(result){
            console.log('selected file is ' + (result ? 'totally UTF-8' : 'not at all UTF-8'));
        });
    });
