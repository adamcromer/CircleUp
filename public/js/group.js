
var $eventList = $("#event-list");

// $.get("/group/:id").then(function(data) {
//   console.log(data);
// });
var pathArray = window.location.pathname.split('/');
var groupId = pathArray[2];

$.get("/api/events").then(function (data) {
   console.log(data);
   var names = []
   var $event = data.map(function (event) {
    if (names.indexOf(event.name) === -1) {
      names.push(event.name);
     var $tr = $("<tr>");
     var $tdEvent = $("<td>")
       .text(event.name)
       .css("width", "66.66%");

     var $button = $("<a>")
       .addClass("waves-effect waves-light btn-small btn-flat btn-filled group-button")
       .text("View Event")
       .attr("href", "/event/" + event.id)
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
