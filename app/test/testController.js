angular.module('AppCurriculo').controller('testController', function($scope, $rootScope, curriculoService, utils){
    $scope.dadosGerais = curriculoService.dadosGerais();
    $scope.conhecimentos = curriculoService.conhecimentos();
    $scope.certificados = curriculoService.certificados();
    
    experiencias = curriculoService.experiencias();
    
    $scope.experiencias = {
        pages: {
            small: utils.array.chunk(experiencias,1),
            medium: utils.array.chunk(experiencias,2),
            large: utils.array.chunk(experiencias,3)
        }
    }

});