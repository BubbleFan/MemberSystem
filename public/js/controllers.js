var indexCtrlModule = angular.module("indexCtrlModule" , [])
indexCtrlModule.controller('indexCtrl',  function($scope){
    $scope.username = '';
    $scope.password = '';
})


var addmemberCtrl = angular.module('addmemberCtrl',[]);

addmemberCtrl.controller('AddmemberCtrl',function($scope,$state,$stateParams){

    $scope.memberInfoIndex;
    $scope.memberInfoName;
    $scope.memberInfoAge;
    $scope.memberInfoSex;
    $scope.memberInfoInTime;
    $scope.memberInfoEnglishName;
    $scope.memberInfoNumber;

    $scope.memberType = location.href.substring(location.href.length-1)
    //console.log($scope.memberType)


})


var memberListModule = angular.module("MemberListModule",[]);

memberListModule.controller('MemberListCtrl', function($scope,$http,$state,$stateParams){

	$scope.filterOptions = {

		filterText : "",
		useExternalFilter: true

	};

	$scope.totalServerItems = 0;

	/*$scope.pagingOptions = {

		pageSizes : [5,10,20],
		PageSize : 5,
		currentPage : 1

	};*/

    $scope.pagingOptions = {
        pageSizes : [16,20,30],
        pageSize : 16,
        currentPage : 1
    }

	$scope.setPagingData = function(data, page, pageSize){	
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        //console.log(pagedData)
        $scope.myData = pagedData;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
        //console.log(data)
    };
//console.log($stateParams);

    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            //console.log(searchText)
            if (searchText) {
                var ft = searchText.toLowerCase();
                //alert(1)
                $http.get('../members' + $stateParams.memberType).success(function (largeLoad) {		
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });            
            } else {
                $http.get('../members' + $stateParams.memberType).success(function (largeLoad) {
                    $scope.setPagingData(largeLoad,page,pageSize);
                   // console.log($stateParams.memberType);
                   //console.log(largeLoad)
                });
            }
        }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.$watch('filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.gridOptions = {
    	data : 'myData | filter:query',
    	rowTemplate: '<div  style="height: 100%"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
            '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
            '<div ng-cell></div>' +
            '</div></div>',
        multiSelect: false,
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
        enablePinning: true,
        enablePaging: true,
        showFooter: true,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions,
        columnDefs: [{
            field: 'index',
            displayName: '序号',
            width: 60,
            pinnable: false,
            sortable: false
        }, {
            field: 'name',
            displayName: '姓名',
            enableCellEdit: true
        }, {
        	field: 'EnglishName',
        	displayName: '英文名',
        	enableCellEdit: true

        }, {
            field: 'sex',
            displayName: '性别',
            enableCellEdit: true,
            width: 60
        }, {
            field: 'age',
            displayName: '年龄',
            enableCellEdit: true,
            width: 120
        }, {
            field: 'number',
            displayName: '工号',
            enableCellEdit: true,
            width: 200
        }, {
            field: 'inTime',
            displayName: '入职日期',
            enableCellEdit: true,
            width: 100
        },{
            fiele: 'operation',
            displayName: '操作',
            enableCellEdit: false,
            width: 100,
            cellTemplate:'<div><a href="javascript:;" ng-click="removeRow()">删除</a></div>'
        }]

    }

    $scope.removeRow = function() {
       var index = this.row.rowIndex;
       $scope.gridOptions.selectItem(index, false);
       $scope.myData.splice(index, 1);
       console.log($scope.myData.length)
      
    };

})


var memberDetailMoudle = angular.module("MemberDetailCtrl", []);
memberDetailMoudle.controller('MemberDetail', function($scope, $http, $state, $stateParams) {
    
   
    
});