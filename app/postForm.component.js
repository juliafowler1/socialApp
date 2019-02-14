"use strict";
const postForm = {
    bindings: { 
        showForm: "&" ,
        formToggle: "<",
        addPost: "&"
},
templateUrl: "app/postForm.html"


}


// The postForm component displays the new post form.
// i. It has one outbound binding called onSubmit.

angular.module("SocialApp")
    .component("postForm", postForm);