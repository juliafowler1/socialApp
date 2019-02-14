"use strict";
const socialposts = {
    templateUrl: "app/socialposts.html",
    controller: [function () {
        const vm = this;
        vm.postsLibrary = [
            { title: "my day", thought: "is great" },
            { title: "hey", thought: "whats up" },
            { title: "tomorrow", thought: "is Thurs" }
        ]
        // connect to ng-show
        vm.formToggle = false;
        vm.showForm = function () {
            vm.formToggle = true;
        }
        vm.addPost = function (newPost) {
            vm.postsLibrary.push(angular.copy(newPost));
            vm.formToggle = false;
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";

            console.log(newPost)
        }
        vm.removePost = function (index) {
            vm.postsLibrary.splice(index, 1)
        }


        // i. It owns the list of posts.
        // ii. Its template contains the ng-repeat for posts and the “New Post” button.
        // iii. The other two components are created inside of its template.

    }]

}


angular.module("SocialApp")
    .component("socialposts", socialposts)