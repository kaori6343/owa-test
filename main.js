(() => {
    let counter = 0;
    const app = document.querySelector('#app');

    function printLog(kind, message) {
        app.textContent = `[${new Date()}][${kind}] ${message}\n${app.textContent}`
    }

    setInterval(() => {
        navigator.geolocation.getCurrentPosition(pos => printLog('location', `緯度: ${pos.coords.latitude}, 経度: ${pos.coords.longitude}`));
        printLog('countup', `counter: ${counter}`);
        counter++;
    }, 60000);

})();
