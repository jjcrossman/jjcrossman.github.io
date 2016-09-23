angular.module( 'addGame' )

.directive( 'headerBar', function () {
  return {

    templateUrl: './js/features/templates/header-bar-tmpl.html'
    , restrict: 'E'
    , controller: 'headerCtrl'
    , scope: {
      gameTitle: "="
      , gamePlatform: "="
      , whichEmblem: "="
      , playingStyle: "="
      , completedStyle: "="
    }
    , link: function ( scope, elem, attr, ctrl ) {

       angular.element( document.querySelector('#blankAddGame') ).on('click', function ( event ) {
        scope.gameTitle = "";
        scope.gamePlatform = "";
        scope.whichEmblem = "";
        scope.playingStyle = {};
        scope.completedStyle = {};
      } );

    }

  }

} );
