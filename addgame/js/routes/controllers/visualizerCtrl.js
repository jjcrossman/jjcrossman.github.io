angular.module( 'addGame' )

.controller( 'visualizerCtrl', function ( $scope, $stateParams, visualizerService, historyService, footerService ) {

  function init () {
    $scope.gameThumbnail = "../../../styles/images/noGame.png";
    $scope.video1Url = window.location.href;
    $scope.video2Url = window.location.href;
    $scope.gameNoteEntryText = "";
    $scope.allGames = historyService.getGames();
    if ( $stateParams.game !== "" ){
    $scope.gameDescription = "loading description . . .";
    $scope.gameName = ". . .";
    $scope.gameDate = "../../....";
    $scope.videoObjs = [ { name: "Retrieving video . . .", url: window.location.href } ];
    $scope.videoObjs = [ { name: "Retrieving video . . .", url: window.location.href } ];
    $scope.gameNotes = ["Retrieving your notes . . ."];
    $scope.retrieveNotes();
  } else {
    $scope.gameDescription = "...if you clicked a game in your lists, or on the history page.";
    $scope.gameName = "a game would be here...";
    $scope.gameDate = "../../....";
    $scope.videoObjs = [ { name: "A video would be here.", url: window.location.href } ];
    $scope.videoObjs = [ { name: "A video would be here too.",
    url: window.location.href } ];
    $scope.gameNotes = ["This section loads any personal notes you've attached to a game."];
  }
  }

  $scope.videoObjs = [];


$scope.getGameTitleForFailedHttpRequest = gameTitle => {
    $scope.failedHttpGameTitle = gameTitle;
}

//If a game is searched, retrieve its notes
$scope.retrieveNotes = function () {
if ( $stateParams.game !== "" ) {
  for ( var i = 0; i < $scope.allGames.length; i++ ) {
    for ( var key in $scope.allGames[i] ) {
      if ( key === "title" ) {
        if ( $scope.allGames[i][key].toLowerCase().split(" ").join("") === $stateParams.game ) {
          $scope.gameNotes = [];
          $scope.targetGameForNotes = $scope.allGames[i];
          $scope.whichPlatform = $scope.allGames[i]["platform"];
          for ( var j = 0; j < $scope.allGames[i].notes.length; j++ ) {
          $scope.gameNotes.push( $scope.allGames[i].notes[j] );
        }
          break;
        }
      }
    }
  }
}
}

$scope.addNoteToGameObj = function ( noteText ) {
  if ( $stateParams.game ) {
  $scope.gameNotes.push( noteText );
  $scope.targetGameForNotes.notes.push( noteText );
  $scope.gameNoteEntryText = "";
  //Store updated object in services
  historyService.sendUpdatedGameNotes( $scope.allGames );
  footerService.sendUpdatedGameNotes( $scope.allGames, $scope.whichPlatform );
} else {
  $scope.gameNoteEntryText = "";
}

}

if ( $stateParams.game !== "" ) {
  visualizerService.getDescriptionForGame()
  .then( function ( result ) {
    if (result) {
    $scope.gameName = result.name;
    $scope.gameDescription = result.deck;
    $scope.gameThumbnail = result.image.small_url;
    if ( result.original_release_date === null ) {
      var formattedDate = result.expected_release_month + "/" + result.expected_release_day + "/" + result.expected_release_year;
      $scope.gameDate = formattedDate;
    } else {
    var formattedDate = result.original_release_date.slice(5, 7) + "/" + result.original_release_date.slice(8, 10) + "/" + result.original_release_date.slice(0, 4);
    $scope.gameDate = formattedDate;
    }
    }
    $scope.gameName = visualizerService.getGameTitleForFailedHttpRequest();
} )

  .catch( function ( error ) {
    console.error( error );
  } );
}

if ( $stateParams.game !== "" ) {
  visualizerService.getVideosForGame()
  .then( function ( result ) {
    if ( result ) {
    var count = result.number_of_total_results;
    $scope.videoObjs = [];
    if ( count === 0 ) {
      $scope.videoObjs = [ { name: 'No videos were found', url: window.location.href } ];
    }
    for ( var i = 0; i < count; i++ ) {
      $scope.videoObjs.push( { name: result.results[i].name, url: result.results[i].site_detail_url } );
    }
    }

  } )

  .catch( function ( error ) {
    console.error( error );
  } );

}


  init();


} );
