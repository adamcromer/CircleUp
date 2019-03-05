// $(document).ready(function () {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(function (data) {
//     $(".user-name").text(data.name);
//     $(".user-email").text(data.email);
//   });

//   /// inputs for creating group
//   // var createGroup = $("form.group-signup");
//   // var groupNameInput = $("input#new-group-input");
//   // var groupPasswordInput = $("input#new-group-password-input");

//   // createGroup.on("submit", function(event) {
//   //   event.preventDefault();
//   //   console.log("buttonclick")
//   //   var groupData = {
//   //     name: groupNameInput.val().trim(),
//   //     password: groupPasswordInput.val().trim(),
//   //   };
//   //   console.log(groupData);
//   //   if (!groupData.name || !groupData.password ) {
//   //     return;
//   //   }
//   //   // If we have an name and password, run the buildgroup function
//   //   buildGroup(groupData.name, groupData.password);
//   //   groupNameInput.val("");
//   //   groupPasswordInput.val("");
//   // });

//   // function buildGroup(name, password) {
//   //   $.post("/api/groups", {
//   //     name: name,
//   //     password: password,
//   //   }).then(function(data) {
      
//   //     window.location.replace(data);
//   //     // If there's an error, handle it by throwing up a bootstrap alert
//   //   }).catch(handleLoginErr);
//   // }

//   // function handleLoginErr(err) {
//   //   console.log("helloFrontend")
//   //   $("#alert .msg").text(err.responseJSON);
//   //   $("#alert").fadeIn(500);
//   // }
// });
[ Group {
    dataValues:
     { id: 1,
       name: 'jimmys',
       password: 'password',
       createdAt: 2019-03-05T21:15:25.000Z,
       updatedAt: 2019-03-05T21:15:25.000Z },
    _previousDataValues:
     { id: 1,
       name: 'jimmys',
       password: 'password',
       createdAt: 2019-03-05T21:15:25.000Z,
       updatedAt: 2019-03-05T21:15:25.000Z },
    _changed: {},
    _modelOptions:
     { timestamps: true,
       validate: {},
       freezeTableName: false,
       underscored: false,
       underscoredAll: false,
       paranoid: false,
       rejectOnEmpty: false,
       whereCollection: [Object],
       schema: null,
       schemaDelimiter: '',
       defaultScope: {},
       scopes: [],
       indexes: [],
       name: [Object],
       omitNull: false,
       sequelize: [Object],
       hooks: {},
       uniqueKeys: [Object] },
    _options:
     { isNewRecord: false,
       _schema: null,
       _schemaDelimiter: '',
       raw: true,
       attributes: [Array] },
    __eagerlyLoadedAssociations: [],
    isNewRecord: false } ]


