# hsiLongClickOrTouchModule
This angular directive allows you to bind a click/touch and a long click/touch event with a customizable hold time to a DOM element. 
Works on Desktop and Mobile!

## Usage

`var myApp = angular.module('myApp', ['hsiLongClickOrTouchModule']);`

`<div hsi-long-click-or-touch="doSomethingOnImmediateClickOrTouch(),doSomethingOnLongClickOrTouch(),1000"></div>`
