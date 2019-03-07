/* eslint-disable no-unused-vars */
// create group elements
var $groupName = $("#new-group-input");
var $groupPassword = $("#new-group-password-input");
var $submitBtn = $("#btn-signup");
var $groupList = $("#group-list");
// join group
var $groupJoinName = $("#join-group-name-input");
var $groupJoinPassword = $("#join-group-password-input");
var $joinGroupBtn = $("#join-group");

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
  var names = [];
  API.getGroups().then(function(data) {
    var $group = data.map(function(group) {
      if (names.indexOf(group.name) === -1) {
        names.push(group.name);
        var $tr = $("<tr>");

        var $tdGroup = $("<td>")
          .text(group.name)
          .css("width", "66.66%");

        var $button = $("<a>")
          .addClass("waves-effect waves-light btn-small btn-flat btn-filled")
          .text("View Group Page")
          .attr("href", "/group/" + group.groupId);

        var $tdBtn = $("<td>")
          .css("width", "33.33%")
          .append($button);

        $tr.append($tdGroup, $tdBtn);

        return $tr;
      }
    });

    $groupList.empty();
    $groupList.append($group);
  });
};

/// Function for creating group
var handleFormSubmit = function(event) {
  event.preventDefault();

  var group = {
    name: $groupName.val().trim(),
    password: $groupPassword.val().trim(),
    userId: thisUserID
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

// function for joining a group
var joinGroup = function(event) {
  event.preventDefault();

  var join = {
    name: $groupJoinName.val().trim(),
    password: $groupJoinPassword.val().trim(),
    userId: thisUserID
  };
  console.log(join);
  if (!(join.name && join.password)) {
    alert("You must enter a name and password!");
    return;
  }

  API.saveGroupUser(join).then(function() {
    refreshGroups();
    document.location.reload();
  });
  $groupJoinName.val("");
  $groupJoinPassword.val("");
};

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
$joinGroupBtn.on("click", joinGroup);
$groupList.on("click", ".delete", handleDeleteBtnClick);
