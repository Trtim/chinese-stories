(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove(); 
    
   function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    if (window.location.hostname != 'edu.chinese-stories.com') {
        alert('You must be in Chinese stories to use this!');
    } else {
        let percent = Number(parseFloat(prompt('What percent do u want?')));
        if (percent > 100) {
            alert('Score cannot be over 100');
        } else {
            timeSpentOnPage = getRandomInt(224,439);
            save_tests(percent , 5);
        }
    };
})();
