const express = require( "express" );
const app = express();
const config = "./config/config.js";
const { json } = require( "body-parser" );
const port = 4000;

app.use( json() );
app.use( express.static( `${ __dirname }/../addgame` ) );

require( "./features/GiantBomb/GiantBombRoutes.js" )( app );

app.listen( port, () => console.log( `Videogame Backlog is listening on port: ${ port }` ) );
