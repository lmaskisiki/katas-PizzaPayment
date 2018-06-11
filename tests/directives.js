
describe("Testing user-profile directive", function() {
    var $rootScope, $compile, element, scope;
  
    beforeEach(function() {
      module("ItemsApp");
      inject(function($injector) {
        $rootScope = $injector.get("$rootScope");
        $compile = $injector.get("$compile");
        element = angular.element('<user-profile data="user"></user-profile>');
        scope = $rootScope.$new();
        // wrap scope changes using $apply
        scope.$apply(function() {
          scope.user = { name: "John" };
          $compile(element)(scope);
        });
      });
    });
  
    it("Name should be rendered", function() {
      expect(element[0].innerText).toEqual("John");
    });
  });