angular.module( 'addGame' )

.controller( 'headerCtrl', function ( $scope, visualizerService, historyService ) {


  function init () {
    $scope.visualizerHl = visualizerService.getHighlight();
    $scope.historyHl = historyService.getHighlight();
  }

  $scope.highlightVisualizer = function ( ) {
    $scope.visualizerHl = true;
    $scope.historyHl = false;
    visualizerService.storeVisualizerHl( $scope.visualizerHl );
    historyService.storeHistoryHl( $scope.historyHl );
  }

  $scope.highlightHistory = function () {
    $scope.historyHl = true;
    $scope.visualizerHl = false;
    historyService.storeHistoryHl( $scope.historyHl );
    visualizerService.storeVisualizerHl( $scope.visualizerHl );
  }

  $scope.unHighlight = function () {
    $scope.historyHl = false;
    $scope.visualizerHl = false;
    historyService.storeHistoryHl( $scope.historyHl );
    visualizerService.storeVisualizerHl( $scope.visualizerHl );
  }


 init();

} );
