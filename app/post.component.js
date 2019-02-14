"use strict"

const post = {

    bindings: {
        removePost: "&",
        postsLibrary: "<"
    },
    templateUrl: "app/post.html"
}
// The post component displays a single post in the list.
// i. It has one inbound binding called post.

angular.module("SocialApp")
    .component("post", post);