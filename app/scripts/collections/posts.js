define(['backbone','models/post'],function(Backbone, PostModel){
	var Posts = Backbone.Collection.extend({
		model:PostModel
	});

	return Posts;
});