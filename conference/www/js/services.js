angular.module('starter.services', ['ngResource'])
.factory('Service', function($resource){
  return $resource('http://localhost:5000/sessions/:sessionId');
});
