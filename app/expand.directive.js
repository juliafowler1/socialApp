"use strict";
function expandOnFocus() {
    return {
        restrict: "A",
        link: function($cope, $element, $attrs) {
            $element.on("focus", function(){
                $element.css("transform", "scale(2, 2)");
                $element.css("transform-origin", "left top");

            })
            $element.on("blur", function(){
                $element.css("transform", "")


            })
        }

    }

}
angular.module("SocialApp")
    .directive("expandOnFocus", expandOnFocus)