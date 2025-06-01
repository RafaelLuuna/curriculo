function config(
    $stateProvider,
    $urlRouterProvider
){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('curriculoSimples',{
            url: '/curriculo/simples',
            data: {},
            templateUrl: 'app/curriculo/curriculo-simples.html',
        })
}
angular.module('AppCurriculo')
    .config(config)
    .run(function($location){
    });