Package.describe({
  name: "nishihara:errors",
  summary: "A pattern to display application errors to the user",
  version: "1.1.2",
  git:'https://github.com/anishihara/errors',
  documentation:'README.md'
});
Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  if (api.export)
    api.export('Errors');
});
Package.onTest(function (api) {
  api.use('nishihara:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');
  api.addFiles('errors_tests.js', 'client');
});