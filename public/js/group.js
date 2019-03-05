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

function postEvent(eventData) {
  $.post("/api/events", eventData).then(modalCreate.css("display", "none"));
}

// Get references to page elements
var $eventName = $("#new-event-name-input");
var $eventTime = $("#new-event-time-input");
var $eventDate = $("#new-event-date-input");
var $eventLocation = $("#address");
var $eventDescription = $("#new-event-description-input");
var $eventItemsToBring = $("#item_needed1");
console.log("index.js");

var thisUserID;
$.get("/api/user_data").then(function(data) {
  $(".user-name").text(data.name);
  $(".user-email").text(data.email);
  thisUserID = data.id;
});
// The API object contains methods for each kind of request we'll make
var API = {
  saveGroups: function(group) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/groups",
      data: JSON.stringify(group)
    });
  },
  saveGroupUser: function(groupUser) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/group-user",
      data: JSON.stringify(groupUser)
    });
  },
  getGroups: function() {
    return $.ajax({
      url: "api/groups",
      type: "GET"
    });
  },
  deleteGroups: function(id) {
    return $.ajax({
      url: "api/groups/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshGroups = function() {
  API.getGroups().then(function(data) {
    var $group = data.map(function(group) {
      var $a = $("<a>")
        .text(group.name)
        .attr("href", "/group/" + group.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": group.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("waves-effect waves-light btn-small btn-flat btn-filled")
        .text("View Group Page");

      $li.append($button);

      return $li;
    });

    $groupList.empty();
    $groupList.append($group);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var group = {
    name: $groupName.val().trim(),
    password: $groupPassword.val().trim()
  };
  console.log(group);
  if (!(group.name && group.password)) {
    alert("You must enter a name and password!");
    return;
  }

  API.saveGroups(group).then(function() {
    refreshGroups();
    document.location.reload();
  });
  $groupName.val("");
  $groupPassword.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteGroups(idToDelete).then(function() {
    refreshGroups();
  });
};
refreshGroups();
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$groupList.on("click", ".delete", handleDeleteBtnClick);
