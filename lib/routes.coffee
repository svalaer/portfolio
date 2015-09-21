if Meteor.isClient
	Meteor.startup ->
		Router.configure ->
			layoutTemplate: 'layout'
		# Router.route '/', ->
		# 	@render 'layout'
		Router.route '/', ->
			@render 'home',
		Router.route '/resume', ->
			@render 'resume'
		Router.route '/git', ->
			@render 'git'
