
describe("Testing reverse filter", function() {
    var reverse;
    beforeEach(function() {
      module("ItemsApp");
      inject(function($filter) {
        //initialize your filter
        reverse = $filter("reverse", {});
      });
    });
  
    it("Should reverse a string", function() {
      expect(reverse("rahil")).toBe("lihar");
      expect(reverse("don")).toBe("nod");
      //expect(reverse('jam')).toBe('oops'); // this test should fail
    });
  });
  