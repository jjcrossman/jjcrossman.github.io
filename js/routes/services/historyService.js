angular.module( 'addGame' )

.service( 'historyService', function ( $http ) {

  var historyHl = false;
  var games = gamesList;

  this.getHighlight = function ( boolean ) {
    return historyHl;
  }

  this.storeHistoryHl = function ( boolean ) {
    historyHl = boolean;
  }

  this.getGames = function () {
    return games;
  }

  this.sendUpdatedGameNotes = function ( gamesArray ) {
    games = gamesArray;
  }


  this.addGameToHistory = function ( obj ) {
    //Add date information to obj
    var timeObj = new Date();
    var theDate = timeObj.toDateString();
    var searchDate = theDate.split("");
    var theYear;
    var theMonth;
    var theDay;

    //conform theMonth
    switch ( searchDate.slice( 4, 7 ).join("") ) {
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

    //conform theDay and theYear
    var testDate = timeObj.getDate().toString().split("");

    if ( testDate.length === 1 ) {
      theDay = theDate.slice( 8, 9 );
      theYear = theDate.slice( 10, 14 );
    } else {
      theDay = theDate.slice( 8, 10 );
      theYear = theDate.slice( 11, 15 );
    }

    //example: var theDate = 'Sun Sep 18 2016'
    var conformedDate = theMonth + " " + theDay + ", " + theYear;

    //Add dated game to history list
    //Example: 'September 18, 2016'
    obj.dateAdded = conformedDate;
    console.log( obj );
    games.push( obj );
  }

} );

var gamesList = [ {
title: 'Dishonored'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'September 18, 2016'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Guacamelee'
, platform: 'steam'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'March 12, 2015'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Shadow Warrior'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'October 9, 2012'
, notes: []
}
,
{
title: 'Deus Ex: Mankind Divided'
, platform: 'steam'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'August 4, 2016'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Street Fighter V'
, platform: 'steam'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'February 27, 2016'
, notes: []
}
,
{
title: 'Counter strike: Global Offensive'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'March 3, 2014'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Invisible, Inc.'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'December 18, 2015'
, notes: []
}
,
{
title: 'Legend of Grimrock 2'
, platform: 'steam'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'June 14, 2014'
, notes: []
}
,
{
title: 'Mortal Kombat X'
, platform: 'xbox'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'July 17, 2014'
, notes: []
}
,
{
title: 'Titanfall'
, platform: 'xbox'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'November 18, 2013'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Ryse: Son of Rome'
, platform: 'xbox'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'October 18, 2012'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Destiny'
, platform: 'xbox'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'April 11, 2016'
, notes: []
}
,
{
title: 'Dead Rising 3'
, platform: 'xbox'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'May 10, 2012'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Forza Motorsport 5'
, platform: 'xbox'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'December 18, 2015'
, notes: []
}
,
{
title: 'Overwatch'
, platform: 'playstation'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'August 18, 2016'
, notes: []
}
,
{
title: 'LEGO Star Wars: The Force Awakens'
, platform: 'playstation'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'November 23, 2015'
, notes: []
}
,
{
title: 'Mirror\'s Edge: Catalyst'
, platform: 'playstation'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'May 30, 2016'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'DOOM'
, platform: 'playstation'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'February 19, 2016'
, notes: []
}
,
{
title: 'Firewatch'
, platform: 'playstation'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'October 12, 2015'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Gravity Rush Remastered'
, platform: 'playstation'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'October 10, 2015'
, notes: ['Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.']
}
,
{
title: 'Mad Max'
, platform: 'playstation'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'August 25, 2015'
, notes: []
}
,
{
title: 'The Talos Principle'
, platform: 'playstation'
, emblem: '../../../styles/images/playingEmblem.png'
, dateAdded: 'September 30, 2015'
, notes: []
} ];
