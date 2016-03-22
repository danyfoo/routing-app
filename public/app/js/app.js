/**
 * Created by darivera on 3/21/2016.
 */
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){
    "use strict";

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        //HOME STATES AND NESTED VIEWS
        .state('home', {
            url: '/home',
            templateUrl: 'views/pages/home.html'
        })

        //HOME STATES AND NESTED VIEWS
        .state('home.list', {
            url: '/list',
            templateUrl: 'views/pages/home-list.html',
            controller: function($scope){
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        //HOME STATES AND NESTED VIEWS
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        //HOME STATES AND NESTED VIEWS
        .state('about', {
            url: '/about',
            views:{
                //The main template will be placed here (relatively named)
                '': { templateUrl: '/views/pages/about.html'},

                //The child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                //The child views will be defined here (absolutely named)
                'columnTwo@about': {
                    templateUrl: '/views/pages/table-data.html',
                    controller: 'scotchController'
                }
            }
        })

        //HOME STATES AND NESTED VIEWS
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/pages/contact.html'
        });
}); //Closes $routerApp.config()

routerApp.controller('scotchController', function($scope){
    "use strict";

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        },
    ];
});