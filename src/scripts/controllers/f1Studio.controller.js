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