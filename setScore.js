(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove(); 

    if (window.location.hostname != 'edu.chinese-stories.com') {
        alert('You must be in Chinese stories to use this!');
    } else {
        let percent = Number(parseFloat(prompt('What percent do u want?')));
        if (percent > 100) {
            alert('Score cannot be over 100');
        } else {
            save_tests(percent , 5);
        }
    };
})();
