var myApp = angular.module('myApp', ['ui.router','ngGrid','dir',"indexCtrlModule",'MemberListModule','myFilter','addmemberCtrl','MemberDetailCtrl']);

myApp.run(function($rootScope,$state,$stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
})

myApp.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/index');

	$stateProvider.state('index',{
		url : '/index',
		views : {

			'' : {
				templateUrl : 'tpls/home.html'
			},

			'main@index' : {
				templateUrl : 'tpls/login.html'
			}

		}
	})
	.state('memberList',{

		url : '/{memberType:[0-9]{1,4}}',
		views : {

			'' : {
				templateUrl : 'tpls/memberList.html'
			},
			'memberType@memberList' : {

				templateUrl : 'tpls/memberType.html'
			},
			'memberGrid@memberList' : {
				templateUrl : 'tpls/memberGrid.html'
			}
		}

	})
	.state('addmember',{

		url : '/addmember',
		views : {

			'' : {
				templateUrl : 'tpls/addmember.html'
			}
		}
	})
	.state('memberDetail',{

		url : '/memberDetail',
		views : {

			'' : {

				templateUrl : 'tpls/memberDetail.html'
			}
		}
	})

})