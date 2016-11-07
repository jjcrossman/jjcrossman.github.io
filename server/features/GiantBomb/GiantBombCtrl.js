const axios = require( "axios" );
const apiKey = process.env.APIKEY ? process.env.APIKEY : config.giantBomb.apiKey;
const giantBombQueryUrl = `http://www.giantbomb.com/api/search?api_key=${ apiKey }&format=json&query=`;

module.exports = {
  queryGiantBombForDescription( req, res ) {
    axios.get( `${ giantBombQueryUrl }"${ req.params.query }"&resources=game` )
      .then( gameData => {
        return res.status( 200 ).json( gameData.data );
      } )
      .catch( error => {
        console.log( error );
      } );
  }

  , queryGiantBombForVideos( req, res ) {
    axios.get( `${ giantBombQueryUrl }"${ req.params.query }"&resources=video` )
       .then( videoData => {
         return res.status( 200 ).json( videoData.data );
       } )
       .catch( error => {
         console.log( error );
       } );
  }
};
