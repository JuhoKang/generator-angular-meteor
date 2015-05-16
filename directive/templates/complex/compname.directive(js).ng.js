'use strict';

angular.module('<%= appname %>')
.directive('<%= compname %>', function() {
  return {
    restrict: 'EA',
    templateUrl: '<%= dir %>/<%= compname %>.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = '<%=compname%>';
    }
  };
});