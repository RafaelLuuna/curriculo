function config(
    $stateProvider,
    $urlRouterProvider
){
    $urlRouterProvider.otherwise('/curriculo/simples');
    $stateProvider
        .state('curriculoSimples',{
            url: '/curriculo/simples',
            data: {},
            templateUrl: 'app/curriculo/curriculo-simples.html',
        })
        .state('test',{
            url: '/test',
            data: {},
            templateUrl: 'app/test/test.html',
        });
}
angular.module('AppCurriculo')
    .config(config)
    .run(function(){
    });