angular.module('AppCurriculo').controller('curriculoSimplesController', function($scope, $rootScope, curriculoService, utils){
    $rootScope.dadosGerais = curriculoService.dadosGerais();
    $rootScope.conhecimentos = curriculoService.conhecimentos();
    $rootScope.certificados = curriculoService.certificados();

});
angular.module('AppCurriculo').controller('carouselExperienciasController', function($scope, $rootScope, curriculoService, utils){
    
    experiencias = curriculoService.experiencias();
    
    $scope.experiencias = {
            profissional: {
                small: utils.array.chunk(experiencias.profissional,1),
                medium: utils.array.chunk(experiencias.profissional,2),
                large: utils.array.chunk(experiencias.profissional,3)
            },
            academico: {
                small: utils.array.chunk(experiencias.academico,1),
                medium: utils.array.chunk(experiencias.academico,2),
                large: utils.array.chunk(experiencias.academico,3)
            },
            pessoal: {
                small: utils.array.chunk(experiencias.pessoal,1),
                medium: utils.array.chunk(experiencias.pessoal,2),
                large: utils.array.chunk(experiencias.pessoal,3)
            }
    };

    // NOTA: Essa lista está redundante, poderia ser definida diretamente em $scope.experiencias porém acredito que assim facilita a leitura. Isso não afeta significativamente a performance.
    $scope.carouselExperiencias = [
        {
            id: 0,
            pages: $scope.experiencias.profissional 
        },
        {
            id: 1,
            pages: $scope.experiencias.academico 
        },
        {
            id: 2,
            pages: $scope.experiencias.pessoal 
        }
    ];

});