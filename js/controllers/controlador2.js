myApp.controller('controlador2', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.addNewCharacter = function(){
		console.log('Hola mama');
		var data = {
			photo: $scope.newCharacter.photo,
			name: $scope.newCharacter.name,
			age: $scope.newCharacter.age,
			group: $scope.newCharacter.group,
			occupation: $scope.newCharacter.occupation
		}

		$http({
			method: 'POST',
			data: data,
			url: 'http://apipersonajes.herokuapp.com/api/personaje'
		}).then(function(res){		
			console.log(res);		
		},function(err){
			console.log(err);
		})

		$location.url('/')
	}
}]);