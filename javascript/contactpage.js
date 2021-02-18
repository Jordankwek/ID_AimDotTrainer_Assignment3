var checkbug = 1;
var checkcontact = 1;

$('#bug-form').on('click', function (event) {
    if (checkbug % 2 != 0)
        $('#bugformitem').css("height", "38vh");
    checkbug += 1;
})

$('#bugexit').on('click', function (event) {
    $('#bugformitem').css("height", "0");
    checkbug = 0;
})

$('#contact-form').on('click', function (event) {
    if (checkcontact % 2 != 0)
        $('#contactformitem').css("height", "45vh");
    checkcontact += 1;
})


$('#contactexit').on('click', function (event) {
    $('#contactformitem').css("height", "0");
    checkcontact = 0;
})