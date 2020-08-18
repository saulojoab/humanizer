const { remote } = require('electron');

var closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', function (e) {
    var window = remote.getCurrentWindow();
    window.close();
});

var closeBtn = document.getElementById('maximize-btn');

closeBtn.addEventListener('click', function (e) {
    var window = remote.getCurrentWindow();
    
    if (!window.isMaximized()) {
        window.maximize();
        return;
    }

    window.unmaximize();
});

var closeBtn = document.getElementById('minimize-btn');

closeBtn.addEventListener('click', function (e) {
    var window = remote.getCurrentWindow();
    window.minimize();
});