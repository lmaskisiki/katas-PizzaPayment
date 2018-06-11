
describe("Testing Items Service - server-side", function() {
    var ItemsServiceServer,
      $httpBackend,
      jsonResponse = ["hat", "book", "pen"]; //this is what the mock service is going to return
  
    beforeEach(function() {
      module("ItemsApp");
      inject(function($injector) {
        ItemsServiceServer = $injector.get("ItemsServiceServer");
        // set up the mock http service
        $httpBackend = $injector.get("$httpBackend");
  
        // backend definition response common for all tests
        $httpBackend
          .whenGET("items.json") //must match the 'url' called by $http in the code
          .respond(jsonResponse);
      });
    });
  
    it("should return all items", function(done) {
      // service returns a promise
      var promise = ItemsServiceServer.get();
      // use promise as usual
      promise.then(function(items) {
        // same tests as before
        expect(items.data).toContain("hat");
        expect(items.data).toContain("book");
        expect(items.data).toContain("pen");
        expect(items.data.length).toEqual(3);
        // Spec waits till done is called or Timeout kicks in
        done();
      });
      // flushes pending requests
      $httpBackend.flush();
    });
  });