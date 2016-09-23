angular.module( 'addGame', [ 'ui.router' ] )

.config( function ( $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise( '/' );

  $stateProvider
    .state( 'home', {
      url: "/"
      , templateUrl: "./js/routes/templates/home-tmpl.html"
    } )
    .state( 'add', {
      url: "/add-game"
      , templateUrl: "./js/routes/templates/add-tmpl.html"
      , controller: "addCtrl"
    } )
    .state( 'visualizer', {
      url: "/visualizer/:game"
      , templateUrl: "./js/routes/templates/visualizer-tmpl.html"
      , controller: "visualizerCtrl"
    } )
    .state( 'history', {
      url: "/history"
      , templateUrl: "./js/routes/templates/history-tmpl.html"
      , controller: "historyCtrl"
    } );

} );
