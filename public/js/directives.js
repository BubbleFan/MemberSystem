var dir = angular.module('dir',[]);

dir.directive('login' ,function($rootScope){

	return {

		restrict : 'E',
		replace : true,
		template : '<a>登陆</a>',
		link : function($scope, iElm , iAttrs){

			iElm.on('click',function(){

				dpd.users.login({
					"username" : $scope.username,
					'password' : $scope.password

				},function(user,error){

					if(error)alert("请输入正确的用户名和密码");
					if(user){
						location.href = "/#/0"
					}
				})
			})
		}
	}

	
});

dir.directive("add",function(){
	// Runs during compile
	return {

		restrict : "A",

		link: function($scope, iElm, iAttrs) {
			iElm.on('click',function(){
				if(!$scope.memberInfoIndex){
					location.href = "/#/addmember"
					return;

				}
				

				if($scope.memberType==0){
					dpd.members0.post({
						"index":$scope.memberInfoIndex,
						"EnglishName" : $scope.memberInfoEnglishName,
						"sex": $scope.memberInfoSex ,
						"number":$scope.memberInfoNumber,
						"name":$scope.memberInfoName,
						"age":$scope.memberInfoAge,
						"inTime":$scope.memberInfoInTime
					}, function(result, err) {
					  	if(err) return console.log(err);
					  	console.log(result, result.id);

					});
				}else if($scope.memberType==1){
					dpd.members1.post({
						"index":$scope.memberInfoIndex,
						"EnglishName" : $scope.memberInfoEnglishName,
						"sex": $scope.memberInfoSex ,
						"number":$scope.memberInfoNumber,
						"name":$scope.memberInfoName,
						"age":$scope.memberInfoAge,
						"inTime":$scope.memberInfoInTime
					}, function(result, err) {
					  	if(err) return console.log(err);
					  	console.log(result, result.id);

					});

				}else if($scope.memberType==2){
					dpd.members2.post({
						"index":$scope.memberInfoIndex,
						"EnglishName" : $scope.memberInfoEnglishName,
						"sex": $scope.memberInfoSex ,
						"number":$scope.memberInfoNumber,
						"name":$scope.memberInfoName,
						"age":$scope.memberInfoAge,
						"inTime":$scope.memberInfoInTime
					}, function(result, err) {
					  	if(err) return console.log(err);
					  	console.log(result, result.id);

					});

				}else if($scope.memberType==3){
					dpd.members3.post({
						"index":$scope.memberInfoIndex,
						"EnglishName" : $scope.memberInfoEnglishName,
						"sex": $scope.memberInfoSex ,
						"number":$scope.memberInfoNumber,
						"name":$scope.memberInfoName,
						"age":$scope.memberInfoAge,
						"inTime":$scope.memberInfoInTime
					}, function(result, err) {
					  	if(err) return console.log(err);
					  	console.log(result, result.id);

					});

				}else if($scope.memberType==4){
					dpd.members4.post({
						"index":$scope.memberInfoIndex,
						"EnglishName" : $scope.memberInfoEnglishName,
						"sex": $scope.memberInfoSex ,
						"number":$scope.memberInfoNumber,
						"name":$scope.memberInfoName,
						"age":$scope.memberInfoAge,
						"inTime":$scope.memberInfoInTime
					}, function(result, err) {
					  	if(err) return console.log(err);
					  	console.log(result, result.id);

					});

				}

				location.href = "/#/" + $scope.memberType;


				

			})
		}
	};
});

dir.directive("test",function(){

	return {

		restrict : "A",

		link: function($scope, iElm, iAttrs) {
console.log(iAttrs)

			iElm.on("click",function(){

				dpd.members4.del(iAttrs.id, function (err) {
				  	if(err) console.log(err);
				});
			})
			
		}

	}

})