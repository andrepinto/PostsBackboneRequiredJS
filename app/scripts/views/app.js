define(['backbone','collections/posts','views/posts'],
		function(Backbone, PostCollection, PostsView){
	
	var AppView = Backbone.View.extend({
		el:'body',
		initialize: function(){

			var data = [
				{title:'post 1'},
				{title:'post 2'}
			];

			new PostsView({
				collection: new PostCollection(data)
			});
		}
	});

	return AppView;
});