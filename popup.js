$(document).ready(function() {
    function isiEdom(text) {
        alert($('label.radio-inline').last().text());
        $('label.radio-inline').each(function() {
           if (($this).text() == text) {
               $(this).click();
           }
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
                isiEdom('Sangat Baik');
                break;
            default:
                break;
        }
    });
});
// document.addEventListener('DOMContentLoaded', function() {
//     let link = document.getElementById('btn-isi');
//     // onClick's logic below:
//     link.addEventListener('click', function() {
//         alert('halo');
//     });
// });