myApp.controller('controlador2', ['$scope', '$http', function($scope, $http){
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
		
			$scope.newCharacter = {}
		
		},function(err){
			console.log(err);
		})
	}
}]);