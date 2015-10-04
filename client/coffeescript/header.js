
Template.header.rendered = function() {
  // Show sideNav
$('.button-collapse').sideNav();
// Hide sideNav
$('.button-collapse').sideNav('hide');
};

Template.header.helpers({
  routeName: function () {
    return FlowRouter.getRouteName();
  }
});

// Template.header.helpers({
//   "active": function(parent) {
//     var path_parts;
//     path_parts = Router.current().route.url.split("/");
//     if (_.contains(path_parts, parent)) {
//       return "active";
//     }
//   }
// });
