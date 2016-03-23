angular.module('hsiLongClickOrTouchModule', []).directive("hsiLongClickOrTouch", ['$timeout', '$log', function($timeout, $log) {
        return {
            controller: function($scope, $element, $attrs) {
                $element.bind('touchstart', onTouchStart);
                $element.bind('touchend', onTouchEnd);
                $element.bind('mousedown', onMouseDown);
                $element.bind('mouseup', onMouseUp);
                var params = $attrs.hsiLongClickOrTouch.split(",");
                if(params.length !== 3){
                    $log.error("hsiLongClickOrTouch: invalid parameters '" + $attrs.hsiLongClickOrTouch + "'");
                }
                var touchStartTimeout = null;
                var secondFunctionWasCalled = false;
                function onTouchStart(event) {
                    $element.unbind('mousedown', onMouseDown);
                    $element.unbind('mouseup', onMouseUp);
                    $scope.$event = event;
                    secondFunctionWasCalled = false;
                    if (touchStartTimeout) {
                        $timeout.cancel(touchStartTimeout);
                    }
                    touchStartTimeout = $timeout(function() {
                        $scope.$apply(params[1]);
                        secondFunctionWasCalled = true;
                    }, params[2]);
                }
                function onMouseDown(event) {
                    $element.unbind('touchstart', onTouchStart);
                    $element.unbind('touchend', onTouchEnd);
                    $scope.$event = event;
                    secondFunctionWasCalled = false;
                    if (touchStartTimeout) {
                        $timeout.cancel(touchStartTimeout);
                    }
                    touchStartTimeout = $timeout(function() {
                        $scope.$apply(params[1]);
                        secondFunctionWasCalled = true;
                    }, params[2]);
                }
                function onTouchEnd(event) {
                    $scope.$event = event;
                    if (touchStartTimeout) {
                        $timeout.cancel(touchStartTimeout);
                    }
                    if (!secondFunctionWasCalled) {
                        $scope.$apply(params[0]);
                    } else {
                        secondFunctionWasCalled = false;
                    }
                }
                function onMouseUp(event) {
                    $scope.$event = event;
                    if (touchStartTimeout) {
                        $timeout.cancel(touchStartTimeout);
                    }
                    if (!secondFunctionWasCalled) {
                        $scope.$apply(params[0]);
                    } else {
                        secondFunctionWasCalled = false;
                    }
                }
                $scope.$on('$destroy', function() {
                    $element.unbind('touchstart', onTouchStart);
                    $element.unbind('touchend', onTouchEnd);
                    $element.unbind('mousedown', onMouseDown);
                    $element.unbind('mouseup', onMouseUp);
                });
            }
        };
    }]);