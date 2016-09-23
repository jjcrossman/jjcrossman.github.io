angular.module( 'addGame' )

.controller( 'footerCtrl', function ( $scope, $state, footerService, visualizerService, historyService ) {

  function init () {
  $scope.steamGames = footerService.getSteamGames();
  $scope.xboxGames = footerService.getXboxGames();
  $scope.playstationGames = footerService.getPlaystationGames();
  $scope.toggleSteamFooterSearch = false;
  $scope.toggleXboxFooterSearch = false;
  $scope.togglePlaystationFooterSearch = false;
  }

  $scope.highlightVisualizer = function () {
   visualizerService.storeVisualizerHl( true );
   historyService.storeHistoryHl( false );
  }

  $scope.toggleSteamSearchBox = function () {
    if ( $scope.toggleSteamFooterSearch ) {
    $scope.toggleSteamFooterSearch = false;
    $scope.footerSteamSearch = "";
    } else {
    $scope.toggleSteamFooterSearch = true;
    }
  }

  $scope.toggleXboxSearchBox = function () {
    if ( $scope.toggleXboxFooterSearch ) {
    $scope.toggleXboxFooterSearch = false;
    $scope.footerXboxSearch = "";
    } else {
    $scope.toggleXboxFooterSearch = true;
    }
  }

  $scope.togglePlaystationSearchBox = function () {
    if ( $scope.togglePlaystationFooterSearch ) {
    $scope.togglePlaystationFooterSearch = false;
    $scope.footerPlaystationSearch = "";
    } else {
    $scope.togglePlaystationFooterSearch = true;
    }
  }

  $scope.openGameInVisualizer = function ( gameTitle ) {
    visualizerService.getGameToQuery( gameTitle );
    gameTitle = gameTitle.toLowerCase().split(" ").join("");
    $state.go( 'visualizer', { game: gameTitle } );

  }

  init();

} );
