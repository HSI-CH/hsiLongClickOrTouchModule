# hsiLongClickOrTouchModule
This angular directive allows you to bind a click/touch and a long click/touch event with a customizable hold time to a DOM element. 
Works on Desktop and Mobile!

## Usage

`var myApp = angular.module('myApp', ['hsiLongClickOrTouchModule']);`

`<div hsi-long-click-or-touch="doSomethingOnImmediateClickOrTouch(),doSomethingOnLongClickOrTouch(),1000"></div>`

3 Parameters must be given:
- function() that should be called on a normal click/touch (must be defined on $scope or a $root.functionName() does also work)
- function() that should be called on a long click/touch (must be defined on $scope or a $root.functionName() does also work)
- time (ms) to wait on a long click/touch until second function is called instead of the first one
