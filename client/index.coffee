if Meteor.isClient
	Template.nav.helpers
	  "active": (parent) ->
	    path_parts = Router.current().route.url.split "/"
	    if _.contains path_parts, parent
	      return "active"
	Template.nav.rendered = ->
		$(".button-collapse").sideNav();
