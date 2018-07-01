$(document).ready(function() {
    function checkRadio(text) {
        let radios = document.querySelectorAll('input[type="radio"]');
        [].forEach.call(radios, function(radio) {
            console.log(radio.value);
            if (radio.value == text) {
                radio.click();
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
                isiEdom('QkxWRVo5TzI4cWl6VjByZXJXSXBLUT09');
                break;
            case '2':
                isiEdom('WHFoVmtEb0VtdVhRZ2NQaHczdzFRdz09');
                break;
            case '3':
                isiEdom('aGJFd1pYc3JaQzNxVndWWnZXMFlHdz09');
                break;
            case '4':
                isiEdom('YUd3ME1zK2JXdmc1djFXRFUrQmU3Zz09');
                break;
            default:
                break;
        }
    });
});