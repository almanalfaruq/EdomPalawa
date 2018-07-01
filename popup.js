$(document).ready(function() {
    function checkRadio(text) {
        let labels = document.querySelectorAll('label.radio-inline');
        [].forEach.call(labels, function(label) {
            let value = label.innerHTML.split(' ')[5].replace(/\s/g, "");;
            if (value == text) {
                label.click();
            }
        });
    }

    function isiEdom(text) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {
                    code: '(' + checkRadio + ')("' + text + '");'
                }
            );
        });
    }

    $('#btn-isi').click(function() {
        let isi = $('#isi-edom').find(':selected').val();
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
            default:
                break;
        }
    });
});