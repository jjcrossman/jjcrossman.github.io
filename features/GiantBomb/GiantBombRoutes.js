const GiantBombCtrl = require( "./GiantBombCtrl" );

module.exports = app => {
  app.route( "/api/description/:query" )
    .get( GiantBombCtrl.queryGiantBombForDescription );
  app.route( "/api/video/:query" )
    .get( GiantBombCtrl.queryGiantBombForVideos );
};
