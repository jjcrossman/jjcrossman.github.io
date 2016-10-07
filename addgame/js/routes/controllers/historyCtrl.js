angular.module( 'addGame' )

.controller( 'historyCtrl', function ( $scope, $state, historyService, visualizerService ) {

 function init () {
   $scope.games = historyService.getGames();
   $scope.historyEmpty = true;
   if ( $scope.games.length > 0 ) {
     $scope.historyEmpty = false;
   }
 }

 $scope.removeHighlight = function () {
  historyService.storeHistoryHl( false );
 }

 $scope.highlightVisualizer = function () {
  visualizerService.storeVisualizerHl( true );
  historyService.storeHistoryHl( false );
 }

 $scope.openGameInVisualizer = function ( gameTitle ) {
   visualizerService.getGameToQuery( gameTitle );
   visualizerService.setGameTitleForFailedHttpRequest( gameTitle );
   gameTitle = gameTitle.toLowerCase().split(" ").join("");
   $state.go( 'visualizer', { game: gameTitle } );
 }

 init();

} );
