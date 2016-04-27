myApp.controller('controlador4', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams){
	$http({
		method: 'GET',
		url: 'http://apipersonajes.herokuapp.com/api/personajes/' + $routeParams.id
	}).then(function(res){
		// console.log(res.data[0]);
		$scope.personaje = res.data[0];	
	},function(err){
		console.log('Ocurrio un error' + err);
	})
	
	$scope.updateCharacter = function(){
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
			url: 'http://apipersonajes.herokuapp.com/api/personaje/'+$routeParams.id+'?_method=put '
		}).then(function(res){
		
			console.log(res)
			// $scope.newCharacter = {}
		
		},function(err){
			console.log(err);
		})
	}

}])