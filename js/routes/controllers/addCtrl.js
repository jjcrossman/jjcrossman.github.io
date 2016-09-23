angular.module( 'addGame' )

.controller( 'addCtrl', function ( $scope, footerService, historyService ) {

  $scope.gameTitle = "";
  $scope.gamePlatform = "";
  $scope.gameEmblem = "";
  $scope.whichEmblem = "";
  $scope.playingStyle = {};
  $scope.completedStyle = {};

  function init () {
    $scope.invalidEntry = false;
  }

  $scope.$watch( function ( scope ) {
    return scope.gameTitle;
  }, function () {
      $scope.invalidEntry = false;
  } )

  $scope.$watch( function ( scope ) {
    return scope.gamePlatform;
  }, function () {
    $scope.invalidEntry = false;
  } )

  $scope.$watch( function ( scope ) {
    return scope.whichEmblem;
  }, function () {
    $scope.invalidEntry = false;
  } )


  $scope.setPlayingEmblem = function () {
    $scope.whichEmblem = '../../../styles/images/playingEmblem.png';
    $scope.playingStyle = {'background': 'url(\'../../styles/images/playingHL.png\'', 'background-repeat': 'no-repeat', 'background-size': 'contain'};
    $scope.completedStyle = {};
  }

  $scope.setCompletedEmblem = function () {
    $scope.whichEmblem = '../../../styles/images/checkmarkEmblem.png';
    $scope.completedStyle = {'background': 'url(\'../../styles/images/checkmarkHL.png\'', 'background-repeat': 'no-repeat', 'background-size': 'contain'};
    $scope.playingStyle = {};
  }

  $scope.addGameEntryToPlatformBox = function () {
    var obj = {};
    obj.title = $scope.gameTitle;

    //change formatting from scRaMblEd to Scrambled
    var conformedTitle = obj.title.split(" ");
    conformedTitle = conformedTitle.map( function ( word ) {
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      return word;
    } );
    conformedTitle = conformedTitle.join(" ");

    obj.title = conformedTitle;
    obj.platform = $scope.gamePlatform;
    obj.emblem = $scope.whichEmblem;
    if ( !$scope.gameTitle || !$scope.gamePlatform || !$scope.whichEmblem ) {
      $scope.invalidEntry = true;
      return;
    }
    obj.notes = [];
    footerService.addGameEntry( obj );
    $scope.gameTitle = "";
    $scope.gamePlatform = "";
    $scope.whichEmblem = "";
    $scope.playingStyle = "";
    $scope.completedStyle = "";
  }




  init();

} );
