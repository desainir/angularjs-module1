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
		$scope.arrayofItems = [];
		$scope.finalarrayofItems = [];
		$scope.arrayofItems = string.split(",");
		var i;
		var j = 0;

		for (i=0;i<$scope.arrayofItems.length;i++) {
			console.log($scope.arrayofItems[i]);
			if ($scope.arrayofItems[i] !== "") {

				$scope.finalarrayofItems[j] = $scope.arrayofItems[i];
					console.log ('j =' + j);
				console.log($scope.finalarrayofItems[j]);
				console.log($scope.finalarrayofItems.length);
				j++;
			}

		}


	    if ( (string == $scope.placeholder) ||
	    	 ($scope.arrayofItems.length == 0) ||
	    	 (string == "")
	       ) {
	       resultVerbage = "Please enter data first" ;
	       $scope.customStyle.colorClass = "red";
	        $scope.itemStyle.colorClass = "borderred";
	    }  else if ($scope.finalarrayofItems.length > 3) {
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
