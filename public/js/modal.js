// Get the modal
var modalJoin = $('#modal-join');
var modalCreate = $('#modal-create');

// Get the button that opens the modal
var btnJoin = $("#btn-join");
var btnCreate = $("#btn-create");

// When the user clicks on the button, open the modal//
btnJoin.click(function () {
    modalJoin.css('display', 'block');
});

btnCreate.click(function () {
    modalCreate.css('display', 'block');
});

$('.close').click(function () {
    modalJoin.css('display', 'none');
    modalCreate.css('display', 'none');
});

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modalJoin) {
//         modalJoin.css('display', 'none');
//     } else if (event.target == modalCreate) {
//         modalCreate.css('display', 'none');
//     }
// };

//Date Picker
$(document).ready(function () {
    $('.datepicker').datepicker();
});

//Time Picker
$(document).ready(function () {
    $('.timepicker').timepicker();
});
