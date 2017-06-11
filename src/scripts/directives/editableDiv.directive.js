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
