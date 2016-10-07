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

  $scope.$watch( scope => {
    return scope.gameTitle;
  }, () => {
      $scope.invalidEntry = false;
  } )

  $scope.$watch( scope => {
    return scope.gamePlatform;
  }, () => {
    $scope.invalidEntry = false;
  } )

  $scope.$watch( scope => {
    return scope.whichEmblem;
  }, () => {
    $scope.invalidEntry = false;
  } )


  $scope.setPlayingEmblem = () => {
    $scope.whichEmblem = '../../../styles/images/playingEmblem.png';
    $scope.playingStyle = {'background': 'url(\'../../styles/images/playingHL.png\'', 'background-repeat': 'no-repeat', 'background-size': 'contain'};
    $scope.completedStyle = {};
  }

  $scope.setCompletedEmblem = () => {
    $scope.whichEmblem = '../../../styles/images/checkmarkEmblem.png';
    $scope.completedStyle = {'background': 'url(\'../../styles/images/checkmarkHL.png\'', 'background-repeat': 'no-repeat', 'background-size': 'contain'};
    $scope.playingStyle = {};
  }

  $scope.addGameEntryToPlatformBox = () => {

    if ( !$scope.gameTitle || !$scope.gamePlatform || !$scope.whichEmblem ) {
      $scope.invalidEntry = true;
      return;
    }

    class Videogame {
      constructor( title, platform, emblem, notes ) {
        this.title = title;
        this.platform = platform;
        this.emblem = emblem;
        let tempDate = new Date();
        this.dateAdded = tempDate.toDateString();
        this.notes = notes;

      }

      sayPlatform () {
        return this.platform;
      }


    }

    let gameObj = new Videogame ( $scope.conformGameTitle( $scope.gameTitle ), $scope.gamePlatform, $scope.whichEmblem, [] );

    footerService.addGameEntry( gameObj );
    $scope.clearAddGameFields();

  }

  $scope.conformGameTitle = title => {
    //change formatting from scRaMblEd to Scrambled
    let conformedTitle = title.split(" ").map( word => {
      word = `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
      return word;
    } );
    return conformedTitle.join(" ");
  }

  $scope.clearAddGameFields = () => {
    $scope.gameTitle = "";
    $scope.gamePlatform = "";
    $scope.whichEmblem = "";
    $scope.playingStyle = "";
    $scope.completedStyle = "";
  }



  init();

} );
