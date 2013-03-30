define(['backbone', 'views/post'], function(Backbone, PostView){
	
	var PostsView =  Backbone.View.extend({

		el: $('#div-posts'),

		initialize: function(){
			this.renderAll();
		},

		renderAll: function(){
			this.$el.empty();
			this.collection.each(this.render, this);
		},

		render: function(post){
			var postView = new PostView({model: post});
			this.$el.append(postView.render().el);
		}

	});

	return PostsView;
});