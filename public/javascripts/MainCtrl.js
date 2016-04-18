angular.module('BattleStar')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.data = {"data":[{"name":"About The Crew","children":[{"name":"Captain","children":[]},{"name":"Hyperspace FAQS","children":[]},{"name":"First Season","children":[]}]},{"name":"Second Season","children":[{"name":"Plot","children":[]},{"name":"Cast","children":[]}]},{"name":"The Spacecraft","children":[{"name":"Engine","children":[{"name":"Plasma Drive","children":[]},{"name":"Warp Drive","children":[]}]},{"name":"Bridge","children":[]},{"name":"Cabins","children":[]}]}]}

    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    function parseList(dataList) {
      dataList = dataList.map(translate);
      return dataList;
    }

    function translate(element) {
      var children = element.children;
      if (children.length > 0) {
        parseList(children);
      }
      var words = element.name.split(' ');
      words = words.map(function(word){
          if(vowels.indexOf(word[0].toLowerCase()) < 0) {
            return word + '-' + word[0].toLowerCase() + 'or';
          }
          else {
            return word + "-or";
          }
      });
      element.name = words.join(' ');
      return element;
    }

    $scope.data.data = parseList($scope.data.data);

}])