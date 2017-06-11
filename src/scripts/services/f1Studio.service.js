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