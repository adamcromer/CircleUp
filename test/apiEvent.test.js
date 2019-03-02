var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/events", function() {
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
        title: "First Test",
        body: "First Body",
        location: "First Location",
        author: "KickACoderS"
      },
      {
        title: "Second Test",
        body: "Second Body",
        location: "Second Location",
        author: "KickACoderS"
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
            title: "First Test",
            body: "First Body",
            location: "First Location",
            author: "KickACoderS"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            title: "Second Test",
            body: "Second Body",
            location: "Second Location",
            author: "KickACoderS"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
