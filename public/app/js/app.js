/**
 * Created by darivera on 3/21/2016.
 */
angular.module('routerApp', ['routerRoutes'])

//create the controllers
//This will be the controller for the ENTIRE site
.controller('mainController', function(){
    "use strict";
    var vm = this;

    //create a bigMessage variable to display in our view
    vm.bigMesagge = 'A smooth sea never made a skilled sailor.';
})

//home page specific controller
.controller('homeController', function(){
    "use strict";
    var vm = this;
    vm.message = 'This is the homepage!';
})

//about page controller
.controller('aboutController', function(){
    "use strict";
    var vm = this;
    vm.message = 'Look! I am an about page.';
})

// contact page controller
.controller('contactController', function(){
    "use strict";
    var vm = this;
    vm.message = 'Contact us! JK. This is just a demo.';
});