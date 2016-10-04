angular.module('directivePractice')
    .directive('lessonHider', function() {
        return {
            templateUrl: './directives/lessonHider.html',
            restrict: 'E',
            scope: {
                lesson: '=',
                dayAlert: '&'
            },
            controller: function($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            },
            link: function(scope, element, attribute) {
                scope.getSchedule.then(function(response) {
                    scope.schedule = response.data;
                    var flag = false;
                    for (var i = 0; i < scope.schedule.length; i++) {
                        if (scope.schedule[i].lesson === scope.lesson) {
                            scope.lessonDay = scope.schedule[i].weekday;
                            flag = true;

                        }
                    }
                    if(flag === true){
                      element.css('text-decoration', 'line-through');
                    }
                    return scope.schedule;

                });
            }
        }
    });
