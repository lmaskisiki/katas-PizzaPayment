describe("appBroadcaster", function() {
    var appBroadcaster,
      $rootScope,
      $scope,
      $controller,
      item = { name: "Pillow", id: 1 }; //what is going to be broadcast
  
    beforeEach(function() {
      module("ItemsApp");
      inject(function($injector) {
        appBroadcaster = $injector.get("appBroadcaster"); //get the service
        $rootScope = $injector.get("$rootScope"); //get the $rootScope
        $controller = $injector.get("$controller");
        $scope = $rootScope.$new();
      });
      spyOn($rootScope, "$broadcast").and.callThrough(); //spy on $rootScope $broadcast event
      spyOn($rootScope, "$on").and.callThrough(); //spy on $rootScope $on event
    });
  
    it("should broadcast 'item:added' message", function() {
      // avoid calling $broadcast implementation
      $rootScope.$broadcast.and.stub();
      appBroadcaster.itemAdded(item);
      expect($rootScope.$broadcast).toHaveBeenCalled(); //check if there was a broadcast
      expect($rootScope.$broadcast).toHaveBeenCalledWith("item:added", item); //check if the broadcasted message is right
    });
  
    it("should trigger 'item:added' listener", function() {
      // instantiate controller
      $controller("MainCtrl", { $scope: $scope });
      // trigger event
      appBroadcaster.itemAdded(item); //pass the item variable for broadcasting
      expect($rootScope.$on).toHaveBeenCalled();
      expect($rootScope.$on).toHaveBeenCalledWith(
        "item:added",
        jasmine.any(Function)
      );
      expect($scope.item).toEqual(item); //match the broadcasted message with the received message
    });
  });