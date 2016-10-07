angular.module( 'addGame' )

.service( 'visualizerService', function ( $http, $stateParams ) {

  let giantBombQueryUrl = 'http://www.giantbomb.com/api/search?api_key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&format=json&query=';
  let visualizerHl = false;
  let gameDescriptionQuery = "mario party 10";
  let gameVideosQuery = "mario party 10";
  let failedHttpRequestGameTitle = "";

  this.getHighlight = () => visualizerHl

  this.storeVisualizerHl = boolean => visualizerHl = boolean

  this.getGameToQuery = gameTitle => {
    gameDescriptionQuery = gameTitle;
    gameVideosQuery = gameTitle;
  }

  this.getGameTitleForFailedHttpRequest = () => failedHttpRequestGameTitle

  this.setGameTitleForFailedHttpRequest = gameTitle => {
    failedHttpRequestGameTitle = gameTitle;
  }

  this.getDescriptionForGame = () => {

    return $http( {
      method: 'GET'
      , url: `${ giantBombQueryUrl }"${ gameDescriptionQuery }"&resources=game`
    } )
    .then( response => {
      if ( response.data.number_of_total_results === 0 ) {
        let badSearchObj = {
          name: "game not found"
          , deck: "The game you selected returned a failed search"
          , image: {
              small_url: '../../styles/images/badSearch.png' }
          , original_release_date: "00000000000" }
        return badSearchObj;
      }
      return response.data.results[0];
    } )
    .catch( error => {
      console.error( "Use your own Giant Bomb API key (obtain one with a free account) to make the visualizer work: " + error );
    } );

  }

  this.getVideosForGame = function () {

    return $http( {
      method: 'GET'
      , url: `${ giantBombQueryUrl }"${gameVideosQuery}"&resources=video`
    } )
    .then( response => {
      return response.data;
    } )
    .catch( error => {
      console.error( "Use your own Giant Bomb API key (obtain one with a free account) to make the visualizer work: " + error );
    } );

  }

} );
