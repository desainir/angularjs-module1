(function () {
'use strict';

angular.module('CheckLunch', [])

.controller('LunchCheckController', function ($scope) {
	$scope.items = "";
    $scope.LunchCheckItemsResult = "";
    $scope.customStyle = {};
    $scope.itemStyle = {};
    $scope.placeholder = "list comma separated dishes you usually have for lunch";

    $scope.displayNumeric = function () {
    	var totalNameValue = DisplayResult($scope.items);
    	$scope.LunchCheckItemsResult = totalNameValue;
    	$scope.items = "";
    };


	function DisplayResult(string) {
		 $scope.placeholder = "";
		var resultVerbage = "";
		var arrayofItems = string.split(",");
		

	    if ( (string == $scope.placeholder) ||  
	    	 (arrayofItems.length == 0) || 
	    	 (string == "")
	       ) {
	       resultVerbage = "Please enter data first" ;
	       $scope.customStyle.colorClass = "red";
	        $scope.itemStyle.colorClass = "borderred";
	    }  else if (arrayofItems.length > 3) {
		   resultVerbage = "Too Much!!";
		   $scope.customStyle.colorClass = "green";
		   $scope.itemStyle.colorClass = "bordergreen";

	    }  else {
	    	resultVerbage = "Enjoy!" ;
	    	 $scope.customStyle.colorClass = "green";
	    	 $scope.itemStyle.colorClass = "bordergreen";
	    }

		return resultVerbage;

	}
	console.log(DisplayResult($scope.items));
});

})();