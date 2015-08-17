/**
 * Created by lakshmi on 8/14/15.
 */
angular.module('myApp',[]).controller('AppCtrl',function($scope, $http){
  console.log('hi from controller');

  var refresh = function() {
      $http.get("/contacts").success(function (response) {
          console.log("got the requested data");
          $scope.contactlist = response;
          $scope.contact = '';

      })
  }
    refresh();
    $scope.addContact=function(){
        console.log($scope.contact);

        $http.post('/contacts',$scope.contact).success(function(res){
            console.log(res);
            refresh();
        })

    };

    $scope.removeContact = function(id){
        console.log(id);
        $http.delete('/contacts/' + id).success(function(res){
            console.log(res);
            refresh();
        })
    };
    $scope.editContact = function(id){
        console.log(id);
        $http.get('/contacts/'+ id).success(function(res){
            $scope.contact = res;
        })
    };
    $scope.updateContact = function(){
        console.log($scope.contact._id);
        $http.put('/contacts/' +$scope.contact._id, $scope.contact).success(function(res){
            console.log(res);
            refresh();
        })
    }

})

