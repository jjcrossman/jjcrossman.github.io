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

  $scope.highlightVisualizer = () => {
   visualizerService.storeVisualizerHl( true );
   historyService.storeHistoryHl( false );
  }

  $scope.toggleSteamSearchBox = () => {
    if ( $scope.toggleSteamFooterSearch ) {
    $scope.toggleSteamFooterSearch = false;
    $scope.footerSteamSearch = "";
    } else {
    $scope.toggleSteamFooterSearch = true;
    }
  }

  $scope.toggleXboxSearchBox = () => {
    if ( $scope.toggleXboxFooterSearch ) {
    $scope.toggleXboxFooterSearch = false;
    $scope.footerXboxSearch = "";
    } else {
    $scope.toggleXboxFooterSearch = true;
    }
  }

  $scope.togglePlaystationSearchBox = () => {
    if ( $scope.togglePlaystationFooterSearch ) {
    $scope.togglePlaystationFooterSearch = false;
    $scope.footerPlaystationSearch = "";
    } else {
    $scope.togglePlaystationFooterSearch = true;
    }
  }

  $scope.openGameInVisualizer = gameTitle => {

    visualizerService.getGameToQuery( gameTitle );
    visualizerService.setGameTitleForFailedHttpRequest( gameTitle );
    gameTitle = gameTitle.toLowerCase().split(" ").join("");
    $state.go( 'visualizer', { game: gameTitle } );

  }

  init();

} );
