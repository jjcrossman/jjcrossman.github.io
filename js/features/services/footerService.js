angular.module( 'addGame' )

.service( 'footerService', function ( $http, historyService ) {

    var steamGames = steamGamesList;
    var xboxGames = xboxGamesList;
    var playstationGames = playstationGamesList;




  this.getSteamGames = function () {
    return steamGames;
  }

  this.getXboxGames = function () {
    return xboxGames;
  }

  this.getPlaystationGames = function () {
    return playstationGames;
  }

  this.sendUpdatedGameNotes = function ( gamesArray, platform ) {
    var newArr = [];
    for ( var i = 0; i < gamesArray.length; i++ ) {
      for ( var key in gamesArray[i] ) {
        if ( gamesArray[i][key] === platform ) {
          newArr.push( gamesArray[i] );
        }
      }
    }
    if ( platform === "steam" ) {
      steamGames = newArr;
    }
    else if ( platform === "xbox" ) {
      xboxGames = newArr;
    }
    else if ( platform === "playstation" ) {
      playstationGames = newArr;
    }
    else {return;}
  }

  this.addGameEntry = function ( obj ) {

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

var steamGamesList = [ {
title: 'Dishonored'
, platform: 'steam'
, emblem: '../../../styles/images/checkmarkEmblem.png'
, dateAdded: 'September 18, 2016'
, notes: [ 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.', 'Boy howdy, was that a game I done played. I had more fun than I can explain with adjectives appropriate for a general audience.' ]
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
} ];

var xboxGamesList = [ {
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
} ];

var playstationGamesList = [ {
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
