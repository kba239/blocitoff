(function() {
  function List($firebaseArray) {
    var List = {};

    var ref = firebase.database().ref().child("lists");
    var lists = $firebaseArray(ref);

    List.all = lists;

    List.add = function(list) {
      lists.$add(list);
    };

    return List;
  }

  angular
    .module('blocItOff')
    .factory('List', ['$firebaseArray', List]);
})();
