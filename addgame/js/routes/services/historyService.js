angular.module( 'addGame' )

.service( 'historyService', function ( $http ) {

  let historyHl = false;
  let games = gamesList;

  this.getHighlight = () => historyHl

  this.storeHistoryHl = boolean => historyHl = boolean

  this.getGames = () => games

  this.sendUpdatedGameNotes = gamesArray => games = gamesArray


  this.addGameToHistory = function( obj ) {
    //Add date information to game Object, which is obj
    //Creating formatted date from: theDay, theMonth, theYear
    let theDate = obj.dateAdded;
    // theDate = 'Sun Sep 18 2016'

    //conform theMonth
    let month = theDate.slice( 4, 7 );
    let conformedMonth = this.conformTheMonth( month );

    //conform theDay and theYear
    let timeObj = new Date();
    let dayLength = timeObj.getDate().toString().split("").length;
    let dayAndYear = this.conformDayAndYear( dayLength, theDate );

    let { theDay } = dayAndYear;
    let { theYear } = dayAndYear;


    //example: let theDate = 'Sun Sep 18 2016'
    let conformedDate = `${ conformedMonth } ${ theDay }, ${ theYear }`;

    //Add conformed date to game object and history service's games array.
    //Example: 'September 18, 2016'
    obj.dateAdded = conformedDate;
    games.push( obj );
  }

  this.conformTheMonth = month => {
    switch ( month ) {
      case "Jan":
        theMonth = "January";
        break;
      case "Feb":
        theMonth = "February";
        break;
      case "Mar":
        theMonth = "March";
        break;
      case "Apr":
        theMonth = "April";
        break;
      case "May":
        theMonth = "May";
        break;
      case "Jun":
        theMonth = "June";
        break;
      case "Jul":
        theMonth = "July";
        break;
      case "Aug":
        theMonth = "August";
        break;
      case "Sep":
        theMonth = "September";
        break;
      case "Oct":
        theMonth = "October";
        break;
      case "Nov":
        theMonth = "November";
        break;
      case "Dec":
        theMonth = "December";
        break;
      default:
        break;
    }
    return theMonth;
  }

  this.conformDayAndYear = ( dayLength, theDate ) => {
    if ( dayLength === 1 ) {
      return {
        theDay: `${ theDate.slice( 9, 10 ) }`
        , theYear: `${ theDate.slice( 11, 15 ) }`
      }
    } else {
      return {
      theDay: `${ theDate.slice( 8, 10 ) }`
      , theYear: `${ theDate.slice( 11, 15 ) }`
      }
    }
  }

} );

const gamesList = [ {
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
}
,
{
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
}
,
{
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
