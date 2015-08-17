/**
 * Created by lakshmi on 8/14/15.
 */
angular.module('myApp',[]).controller('AppCtrl',function($scope, $http, Contact){
  console.log('hi from controller');

  var refresh = function() {
      Contact.get().success(function (response) {
          console.log("got the requested data");
          $scope.contactlist = response;
          $scope.contact = '';
      })
  }
    refresh();

    $scope.editContact = function(id){
        console.log(id);
        $http.get('/contacts/'+ id).success(function(res){
            $scope.contact = res;
        })
    };
    $scope.updateContact = function(){
        console.log($scope.contact._id);
        var new_contact = $scope.contact;
        Contact.update(new_contact).success(function(res){
            console.log(res);
            refresh();
        })
    }
    $scope.removeContact = function(id){
        console.log(id);
        Contact.delete(id).success(function(res){
            console.log(res);
            refresh();
        })
    };
    $scope.addContact=function(){
        console.log($scope.contact);
        Contact.add($scope.contact).success(function(res){
            console.log(res);
            refresh();
        })
    };
}).factory('Contact', function($http){
    return{
        get: function(){
            return $http.get('/contacts');
        },
        update: function(new_contact){
            return $http.put('/contacts/' + new_contact._id, new_contact);
        },
        delete:function(id){
          return $http.delete('/contacts/'+id);
        },
        add: function(contact){
            return $http.post('/contacts',contact);
        }
    }
})

