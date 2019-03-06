/* eslint-disable no-unused-vars */
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
var event = {
  name: name,
  dateAndTime: date + " " + time,
  location: location,
  description: description,
  itemsToBring: itemsToBring
};
postEvent(event);
console.log(event);
console.log(date, time);

var $eventList = $("#event-list");

// $.get("/api/events").then(function(data) {
//   console.log(data);
// });

$.get("/api/events").then(function(data) {
  console.log(data);
  var names = [];
  var $event = data.map(function(event) {
    if (names.indexOf(event.name) === -1) {
      names.push(event.name);
      var $tr = $("<tr>");
      var $tdEvent = $("<td>")
        .text(event.name)
        .css("width", "66.66%");

      var $button = $("<a>")
        .addClass(
          "waves-effect waves-light btn-small btn-flat btn-filled group-button"
        )
        .text("View Event")
        .attr("href", "/event/" + event.id);
      //  .attr("id", + event.Id);

      var $tdBtn = $("<td>")
        .css("width", "33.33%")
        .append($button);

      $tr.append($tdEvent, $tdBtn);

      return $tr;
    }
  });

  $eventList.empty();
  $eventList.append($event);
});
