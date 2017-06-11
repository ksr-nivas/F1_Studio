(function() {
    'use strict';

    angular.module('f1StudioApp', ['ngRoute'])
        .config(function($routeProvider, $locationProvider){
            $routeProvider
                .when('/',{
                    templateUrl: 'scripts/partials/welcome.partial.html',
                    controller: 'f1StudioController'
                })
                .when('/board',{
                    templateUrl: 'scripts/partials/board.partial.html',
                    controller: 'f1StudioController'
                });
            
            $locationProvider.html5Mode(true);
        });
        
})();
(function() {
    'use strict';

    angular
        .module('f1StudioApp')
        .controller('f1StudioController', f1StudioController);

    f1StudioController.$inject = ['$scope', '$location', 'f1StudioService'];
    function f1StudioController($scope, $location, f1StudioService) {
        var vm = this;

        vm.onBoardClick = function(){
            $location.path('board');        
        };

        f1StudioService.getData()
            .then(function(data){
                vm.listData = data;
            })
            .catch(function(error){
                console.log(error);
            });
        
        vm.onItemClick = function(){
            vm.editable = true;
        };
    }
})();
(function() {
    'use strict';

    angular
        .module('f1StudioApp')
        .service('f1StudioService', f1StudioService);

    f1StudioService.$inject = ['$http', '$q'];
    function f1StudioService($http, $q) {
        this.getData = getData;
        
        ////////////////

        function getData() {
            var deferred = $q.defer();
            $http.get('https://reqres.in/api/unknown')
            .then(function(response){
                deferred.resolve(response.data.data);
            })
            .catch(function(error){
                deferred.reject(error);
            });

            return deferred.promise;
        }    
    }
})();
(function() {
    'use strict';

    angular
        .module('f1StudioApp')
        .directive('editableDiv', editableDiv);

    editableDiv.$inject = [];
    function editableDiv() {
        var directive = {
            restrict: 'E',
            scope: {
                item: '=',
                editable: '='
            },
            template:'<div>'+
                    '<p contenteditable="editable">{{item.name}}</p>'+
                    '<button type="button" ng-if="editable" class="btn btn-xs btn-success">Save</button>'+
                    '</div>',
            link: linkFunction
        };

        function linkFunction(scope, ele, attr){

        }

        return directive;
    }

})();
