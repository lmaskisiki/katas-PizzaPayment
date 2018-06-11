describe('Testing Languages Service', function(){
    var LanguagesService;
  
    beforeEach(function(){
      module('ItemsApp');
      inject(function($injector){
        ItemsService = $injector.get('ItemsService');
      });
    });
  
    it('should return all items', function() {
      var items = ItemsService.get();
      expect(items).toContain('hat');
      expect(items).toContain('book');
      expect(items).toContain('pen');
      expect(items.length).toEqual(3);
    });
  });
  