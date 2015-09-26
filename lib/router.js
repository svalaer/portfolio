if (Meteor.isClient) {
  FlowRouter.route('/', {
    action: function() {
      BlazeLayout.render('layout', {
        top: 'header',
        main: 'home',
        footer: 'footer'
      });
    },
    name: 'home'
  });
  FlowRouter.route('/work', {
    action: function() {
      BlazeLayout.render('layout', {
        top: 'header',
        main: 'work',
        footer: 'footer'
      });
    },
    name: 'work'
  });
  FlowRouter.route('/who', {
    action: function() {
      BlazeLayout.render('layout', {
        top: 'header',
        main: 'who',
        footer: 'footer'
      });
    },
    name: 'who'
  });
  FlowRouter.route('/how', {
    action: function() {
      BlazeLayout.render('layout', {
        top: 'header',
        main: 'contactMe',
        footer: 'footer'
      });
    },
    name: 'how'
  });
}
