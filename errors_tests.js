// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by errors.js.
import { name as packageName } from "meteor/errors";

Tinytest.add("Errors - collection", function (test) {
  test.equal(Errors.collection.find({}).count(), 0);
  Errors.throw('A new error!');
  test.equal(Errors.collection.find({}).count(), 1);
  Errors.collection.remove({});
});
Tinytest.addAsync("Errors - template", function (test, done) {
  Errors.throw('A new error!');
  test.equal(Errors.collection.find({}).count(), 1);
  // render the template
  Template.insert(Template.render(Template.meteorErrors), document.body);
  Meteor.setTimeout(function () {
    test.equal(Errors.collection.find({}).count(), 0);
    done();
  }, 5000);
});