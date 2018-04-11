(() => {
    let counter = 0;
    const app = document.querySelector('#app');

    setInterval(() => {
        app.textContent = `[${new Date()}] counter: ${counter}\n${app.textContent}`;
        counter++;
    }, 1000);
})();
