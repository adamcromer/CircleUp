var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("/api/events test", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should pass API event test", function(done) {
    // Add some examples to the db to test with
    db.Event.bulkCreate([
      {
        name: "First Test",
        dateAndTime: "2019-01-01T12:00:00.000Z",
        location: "First Location",
        description: "Super cool first event.",
        itemsToBring: "this, that"
      },
      {
        name: "Second Test",
        dateAndTime: "2019-01-02T12:00:00.000Z",
        location: "Second Location",
        description: "Just as cool second event.",
        itemsToBring: "that, this"
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/events").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response
        expect(err).to.be.null;
        expect(responseStatus).to.equal(200);
        expect(responseBody).to.be.an("array");

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            name: "First Test",
            dateAndTime: "2019-01-01T12:00:00.000Z",
            location: "First Location",
            description: "Super cool first event.",
            itemsToBring: "this, that"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            name: "Second Test",
            dateAndTime: "2019-01-02T12:00:00.000Z",
            location: "Second Location",
            description: "Just as cool second event.",
            itemsToBring: "that, this"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
