angular.module( 'addGame' )

.service( 'footerService', function ( $http, historyService ) {

    let steamGames = steamGamesList;
    let xboxGames = xboxGamesList;
    let playstationGames = playstationGamesList;


  this.getSteamGames = () => steamGames

  this.getXboxGames = () => xboxGames

  this.getPlaystationGames = () => playstationGames

  this.sendUpdatedGameNotes = ( gamesArray, platform ) => {
    let newArr = [];
    gamesArray.forEach( game => {
      if ( game.sayPlatform() === platform ) {
        newArr.push( game );
      }
    } );


    switch ( platform ) {
      case "steam":
        steamGames = newArr;
        break;
      case "xbox":
        xboxGames = newArr;
        break;
      case "playstation":
        playstationGames = newArr;
        break;
      default:
        break;
    }
    return;

  }

  this.addGameEntry = obj => {

    switch ( obj.platform.toLowerCase().split(" ").join("") ) {
      case "pc":
      case "valve":
      case "computer":
      case "steam":
        obj.platform = "steam";
        steamGames.push( obj );
        historyService.addGameToHistory( obj );
        break;
      case "xboxone":
      case "xbox":
      case "xbone":
      case "xbox1":
      case "microsoft":
        obj.platform = "xbox";
        xboxGames.push( obj );
        historyService.addGameToHistory( obj );
        break;
      case "playstation":
      case "psn":
      case "sony":
      case "ps3":
      case "ps4":
        obj.platform = "playstation";
        playstationGames.push( obj );
        historyService.addGameToHistory( obj );
        break;
      default:
        obj.platform = "xbox";
        xboxGames.push( obj );
        historyService.addGameToHistory( obj );
        break;
    }
  }


} );

const steamGamesList = [ {
title: 'Dishonored'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'September 18, 2016'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Guacamelee'
, platform: 'steam'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'March 12, 2015'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Shadow Warrior'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'October 9, 2012'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Deus Ex: Mankind Divided'
, platform: 'steam'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'August 4, 2016'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Street Fighter V'
, platform: 'steam'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'February 27, 2016'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Counter strike: Global Offensive'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'March 3, 2014'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Invisible, Inc.'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'December 18, 2015'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Legend of Grimrock 2'
, platform: 'steam'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'June 14, 2014'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
} ];

const xboxGamesList = [ {
title: 'Mortal Kombat X'
, platform: 'xbox'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'July 17, 2014'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Titanfall'
, platform: 'xbox'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'November 18, 2013'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Ryse: Son of Rome'
, platform: 'xbox'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'October 18, 2012'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Destiny'
, platform: 'xbox'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'April 11, 2016'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Dead Rising 3'
, platform: 'xbox'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'May 10, 2012'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Forza Motorsport 5'
, platform: 'xbox'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'December 18, 2015'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
} ];

const playstationGamesList = [ {
title: 'Overwatch'
, platform: 'playstation'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'August 18, 2016'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'LEGO Star Wars: The Force Awakens'
, platform: 'playstation'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'November 23, 2015'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Mirror\'s Edge: Catalyst'
, platform: 'playstation'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'May 30, 2016'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'DOOM'
, platform: 'playstation'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'February 19, 2016'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Firewatch'
, platform: 'playstation'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'October 12, 2015'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Gravity Rush Remastered'
, platform: 'playstation'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'October 10, 2015'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'Mad Max'
, platform: 'playstation'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'August 25, 2015'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
}
,
{
title: 'The Talos Principle'
, platform: 'playstation'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'September 30, 2015'
, notes: []
, sayPlatform () {
  return this.platform.toLowerCase();
}
} ];
