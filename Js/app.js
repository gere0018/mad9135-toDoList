var myApp= angular.module("gere0018-ToDoList", []);
myApp.controller('ListController', ['$scope', function($scope) {
  $scope.list = ["Finish Assignments", "Wash clothes", "Plan weekly meny"];
  $scope.text="";
  $scope.addText= function(){
      if($scope.text){
          $scope.list.push(this.text);
          $scope.text="";
          console.log("pushed text in array");
      }

  };
    $scope.deleteItem= function(index){
        $scope.list.splice(index,1);
        console.log("inside delete item");

};

}]);
