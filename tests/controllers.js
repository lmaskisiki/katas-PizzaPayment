describe("Testing a Hello Pluralsight controller", function() {
  var $controller;

  // Setup for all tests
  beforeEach(function() {
    // loads the app module
    module("ItemsApp");
    inject(function(_$controller_) {
      // inject removes the underscores and finds the $controller Provider
      $controller = _$controller_;
    });
  });

  // Test (spec)
  it("should say 'Hello Pluralsight'", function() {
    var $scope = {};
    // $controller takes an object containing a reference to the $scope
    var controller = $controller("MainCtrl", { $scope: $scope });
    // the assertion checks the expected result
    expect($scope.title).toEqual("Hello Pluralsight");
  });

  // ... Other tests here ...a
});





