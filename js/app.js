// require('angular')
// module.exports = window.angular;
angular.module('routerApp', ['routerRoutes'])

.controller('mainController', () => {
    var vm = this
    vm.bigMessage = 'Lop CNPM moi : Lam viec voi Angular trong file public/file/js'
})

.controller('homeController', () => {
    var vm = this
    vm.message = ' HOME PAGE '
})


.controller('aboutController', () => {
    var vm = this
    vm.message = ' ABOUT PAGE '
})


.controller('contactController', () => {
    var vm = this
    vm.message = ' CONTACT PAGE '
})

