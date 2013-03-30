define(['backbone'], function(Backbone){

	var MainRouter = Backbone.Router.extend({
		routes:{
			'' : 'init',
			'post/:id' : 'viewPost'
		},

		init: function(){
			App.Vent.trigger('startPageLoad');
		},

		viewPost: function(id){
			App.Vent.trigger('showPost',{
				postId:index
			})
		}
	});

	return MainRouter;
});