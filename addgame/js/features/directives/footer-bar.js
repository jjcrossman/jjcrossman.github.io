angular.module( 'addGame' )

.directive( 'footerBar', function () {

  return {
    templateUrl: './js/features/templates/footer-bar-tmpl.html'
    , restrict: 'E'
    , scope: {

    }
    , link: function ( scope, elem, attr, ctrl ) {


    }
    , controller: 'footerCtrl'
  }

} );
