/* eslint-disable no-unused-vars */
// Get the modal
var modalJoin = $("#modal-join");
var modalCreate = $("#modal-create");

// Get the button that opens the modal
var btnJoin = $("#btn-join");
var btnCreate = $("#btn-create");

// When the user clicks on the button, open the modal
btnJoin.click(function() {
  modalJoin.css("display", "block");
});

btnCreate.click(function() {
  modalCreate.css("display", "block");
});

$(".close").click(function() {
  modalJoin.css("display", "none");
  modalCreate.css("display", "none");
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
$(document).ready(function() {
  $(".datepicker").datepicker();
});

//Time Picker
$(document).ready(function() {
  $(".timepicker").timepicker();
});

var createEvent = $("#create-event");

//Simplified array to string function
function arrayToString(arr) {
  var arrString = arr.join(", ");
  return arrString;
}

//Simplified string to array function
function stringToArray(str) {
  var stringArr = str.split(" ");
  return stringArr;
}

//Clears new event form
function clearNewEvent() {
  $("#new-event-name-input").val("");
  $("#new-event-date-input").val("");
  $("#new-event-time-input").val("");
  $("#address").val("");
  $("#new-event-description-input").val("");
  $("#item_needed1").val("");
  $("#item_needed2").val("");
  $("#item_needed3").val("");
  $("#item_needed4").val("");
}

//When user clicks create, data gets posted and hides the modal
createEvent.click(function() {
  event.preventDefault();
  var name = $("#new-event-name-input")
    .val()
    .trim();
  var date = $("#new-event-date-input")
    .val()
    .trim();
  var time = $("#new-event-time-input")
    .val()
    .trim();
  var location = $("#address")
    .val()
    .trim();
  var description = $("#new-event-description-input")
    .val()
    .trim();
  var itemsToBring =
    $("#item_needed1")
      .val()
      .trim() +
    ", " +
    $("#item_needed2")
      .val()
      .trim() +
    ", " +
    $("#item_needed3")
      .val()
      .trim() +
    ", " +
    $("#item_needed4")
      .val()
      .trim();

  if (
    name === "" ||
    date === "" ||
    time === "" ||
    location === "" ||
    description === ""
  ) {
    alert(
      "Name, Date, Time, Location, and Description is required to create an event."
    );
  } else {
    var event = {
      name: name,
      dateAndTime: date + " " + time,
      location: location,
      description: description,
      itemsToBring: itemsToBring
    };
    postEvent(event);
  }
});

function postEvent(eventData) {
  $.post("/api/events", eventData).then(function() {
    modalCreate.css("display", "none");
    clearNewEvent();
  });
}
