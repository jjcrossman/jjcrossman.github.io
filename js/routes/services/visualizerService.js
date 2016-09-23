angular.module( 'addGame' )

.service( 'visualizerService', function ( $http, $stateParams ) {

  var giantBombQueryUrl = 'http://www.giantbomb.com/api/search?api_key=xxxxxxxxxxxxxxxx&format=json&query=';
  var visualizerHl = false;
  var gameDescriptionQuery = "mario party 10";
  var gameVideosQuery = "mario party 10";

  this.getHighlight = function () {
    return visualizerHl;
  }

  this.storeVisualizerHl = function ( boolean ) {
    visualizerHl = boolean;
  }

  this.getGameToQuery = function ( gameTitle ) {
    gameDescriptionQuery = gameTitle;
    gameVideosQuery = gameTitle;
  }

  this.getDescriptionForGame = function () {

    return $http( {
      method: 'GET'
      , url: giantBombQueryUrl + '\"' + gameDescriptionQuery + '\"' + '&resources=game'
    } )
    .then( function ( response ) {
      console.log(response);
      if ( response.data.number_of_total_results === 0 ) {
        var badSearchObj = { name: "game not found", deck: "The game you selected returned a failed search", image: {small_url: '../../styles/images/badSearch.png'}, original_release_date: "00000000000" }
        return badSearchObj;
      }
      return response.data.results[0];
    } )
    .catch( function ( error ) {
      console.error( "Giant Bomb did not return a valid response: " + error );
    } );

  }

  this.getVideosForGame = function () {

    return $http( {
      method: 'GET'
      , url: giantBombQueryUrl + '\"' + gameVideosQuery + '\"' + '&resources=video'
    } )
    .then( function ( response ) {
      console.log(response);
      return response.data;
    } )
    .catch( function ( error ) {
      console.error( "Giant Bomb did not return a valid response: " + error );
    } );

  }

} );
