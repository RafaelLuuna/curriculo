angular.module('AppCurriculo').controller('curriculoSimplesController', function($scope, $rootScope, curriculoService){
    $scope.dadosGerais = curriculoService.dadosGerais();
    $scope.conhecimentos = curriculoService.conhecimentos();
    $scope.experiencias = curriculoService.experiencias();
    $scope.certificados = curriculoService.certificados();
    $scope.elementIndex = 0;
});