document.addEventListener("DOMContentLoaded", function() {
    // Text randomizer
    function randomizeText() {
        let randomInt = Math.floor(Math.random() * 4);
        if (randomInt == 0) {
            return 'Kurang';
        } else if (randomInt == 1) {
            return 'Cukup';
        } else if (randomInt == 2) {
            return 'Baik';
        } else if (randomInt == 3) {
            return 'Sangat';
        }
    }

    // Function that run inside the currently active tab
    function checkRadio(text) {
        let tempText = text;
        let labels = document.querySelectorAll('label.radio-inline');
        [].forEach.call(labels, function(label, index) {
            // Get only first word from the radio button label
            let value = label.innerHTML.split(' ')[5].replace(/\s/g, "");;
            if (text == 'Random') tempText = randomizeText();
            if (value == tempText) {
                label.click();
            } else if (tempText == 'Kurang' && value == 'Buruk') { // Handle 'Buruk' option if there was no 'Kurang' option
                label.click();
            }
        });
    }

    function isiEdom(text) {
        // Call chrome extension helper
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {
                    // Run the function inside active tab
                    code: '(' + checkRadio + ')("' + text + '");'
                }
            );
        });
    }

    // Get the #btn-isi element
    let btnIsi = document.querySelector('#btn-isi');
    btnIsi.addEventListener('click', function() {
        // Get the #isi-edom element
        let slcEdom = document.querySelector('#isi-edom');
        let isi = slcEdom.value;
        switch (isi) {
            case '1':
                isiEdom('Kurang');
                break;
            case '2':
                isiEdom('Cukup');
                break;
            case '3':
                isiEdom('Baik');
                break;
            case '4':
                isiEdom('Sangat');
                break;
            case '5':
                isiEdom('Random');
            default:
                break;
        }
    });
});