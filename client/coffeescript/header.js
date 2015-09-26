if (Meteor.isClient) {
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
}
